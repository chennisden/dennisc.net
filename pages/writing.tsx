import Link from "@/components/Link";
import PageList from "@/components/PageList";
import { FC } from "react";

const Writing: FC<{}> = () => {
  return (
    <>
      <h1>Writing</h1>
      <p>
        My writing is separated into a couple of categories. (See{" "}
        <Link href="writing/blog/separation">Separation</Link> for an
        explanation on <em>why</em>.)
      </p>
      <PageList
        parentDir="writing"
        pageList={[
          {
            slug: "all",
            data: {
              title: "All",
              desc: "View all my writing at a glance.",
            },
            content: "",
          },
          {
            slug: "essays",
            data: {
              title: "Essays",
              desc: "Advice and philosophy that I intend to reference for a while.",
            },
            content: "",
          },
          {
            slug: "blog",
            data: {
              title: "Blog Posts",
              desc: "Musings, off-the-cuff observations, and interesting stories.",
            },
            content: "",
          },
          {
            slug: "tech",
            data: {
              title: "Tech",
              desc: "Tutorials, thoughts, and stories on technologies I've used.",
            },
            content: "",
          },
        ]}
      />
    </>
  );
};

export default Writing;
