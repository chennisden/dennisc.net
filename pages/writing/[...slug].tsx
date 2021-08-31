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
  const source = fs.readFileSync(
    `posts/${params.slug[0]}/${params.slug[1]}.mdx`
  );
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
  function getPostPaths(folder: string) {
    const postPaths = getPages(`posts/${folder}`)
      .map((page) => {
        const path = page.slug;
        return path;
      })
      .map((path) => ({ params: { slug: [folder, path] } }));
    return postPaths;
  }
  const blogPaths = getPostPaths("blog");
  const essayPaths = getPostPaths("essays");
  const techPaths = getPostPaths("tech");
  const paths = [...blogPaths, ...essayPaths, ...techPaths];
  return {
    paths,
    fallback: false,
  };
};