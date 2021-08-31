import PageRender from "@/components/PageRender";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import {getPathsRecurse } from "@/utils/PageUtils";
import { GetStaticProps, GetStaticPaths } from "next";

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

  const pagePath = `pages${slug.map((str) => `/${str}`)}.mdx`;

  console.log(pagePath);
  const source = fs.readFileSync(pagePath);
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

  const allFiles = getPathsRecurse("pages", []).map((file) => {
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
