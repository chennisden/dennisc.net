import Head from "next/head";
import PageWrapper from "@/components/PageWrapper";
import { FC } from "react";
import { formatDate } from "@/utils/DateUtils";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

const PageRender: FC<{ props }> = ({ props }) => {
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
        <meta
          name="description"
          content={`${props.data.desc || props.data.title}`}
        />
      </Head>
      <PageWrapper>
        <h1>{props.data.title}</h1>
        {props.data.date && <p>Published on {formatDate(props.data.date)}.</p>}
      </PageWrapper>
    </>
  );
};

export default PageRender;
