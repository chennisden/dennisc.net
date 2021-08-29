import PageRender from "@/components/PageRender";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPages } from "@/utils/PageUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";

export default function Page({ code }) {
  const Content = React.useMemo(() => getMDXComponent(code), [code]);
  return <Content />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const source = fs.readFileSync(`posts/essays/${params.slug}.mdx`);
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
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const essayPaths = getPages("posts/essays").map((page) => {
    const path = page.slug;
    return path;
  });
  const paths = essayPaths
    .map((path) => path.replace(/\.mdx$/, ""))
    .map((slug) => ({ params: { slug: `${slug}` } }));
  return {
    paths,
    fallback: false,
  };
};
