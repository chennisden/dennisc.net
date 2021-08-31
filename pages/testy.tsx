import PageWrapper from "@/components/PageWrapper";
import {getPathsRecurse } from "@/utils/PageUtils";
import React from "react";
import fs from "fs";
import path from "path";

export default function Page(props) {
  return (
    <PageWrapper>
      {props.paths.map((params) =>
      params.slug)}
    </PageWrapper>
  );
}

export async function getStaticProps() {

  const allFiles: string[][] = getPathsRecurse("pages", []).map((file) => {
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
          slug: path
        },
      };
    });
  return {
    props: {
      paths,
    },
  };
}
