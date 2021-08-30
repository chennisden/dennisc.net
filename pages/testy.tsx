import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";
import PageRender from "@/components/PageRender";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Page(props) {
  return (
    <PageWrapper>
      {props.paths.map((path) => {
        return <p>{path.params.slug[0]}</p>;
      })}
    </PageWrapper>
  );
}

export async function getStaticProps() {
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
    props: {
      paths,
    },
  };
}
