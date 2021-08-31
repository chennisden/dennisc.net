import Head from "next/head";
import MDXComponents from "@/utils/MDXComponents";
import { FC } from "react";
import { formatDate } from "@/utils/DateUtils";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

const PageRender: FC<{ props }> = ({ props }) => {
  const Content = React.useMemo(
    () => getMDXComponent(props.code),
    [props.code]
  );
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
        <meta
          name="description"
          content={`${props.data.desc || props.data.title}`}
        />
      </Head>
      <h1>{props.data.title}</h1>
      {props.data.date && <p>Published on {formatDate(props.data.date)}.</p>}
      <Content components={MDXComponents} />
    </>
  );
};

export default PageRender;
