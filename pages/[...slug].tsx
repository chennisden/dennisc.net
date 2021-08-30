import PageRender from "@/components/PageRender";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPages } from "@/utils/PageUtils";

export default function PostPage(props) {
  return <PageRender props={props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  var slug: string[];

  if (typeof params.slug === "string") {
    slug = [params.slug];
  } else {
    slug = params.slug;
  }

  const source = fs.readFileSync(`pages/${slug[0]}.mdx`);
  const { content, data } = matter(source);

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  // Esbuild has to be manually told
  // where to be pointed
  // because Next JS breaks stuff
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code } = await bundleMDX(content);

  return {
    props: {
      code,
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
  const getAllFiles = function (dirPath, arrayOfFiles: string[]) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join("/", file));
      }
    });

    return arrayOfFiles;
  };

  const allFiles = getAllFiles("pages", []).map((file) => {
    const fileAsArray = file.split("/");
    fileAsArray.splice(0, 1);
    return fileAsArray;
  });

  const paths = allFiles
    .filter((path) => /\.mdx$/.test(path[path.length - 1]))
    .map((path) => {
      path[path.length - 1] = path[path.length - 1].replace(/\.mdx$/, "");
      return {
        params: {
          slug: path,
        },
      };
    });
  return {
    paths,
    fallback: false,
  };
};
