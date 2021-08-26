import Link from "utils/Link";
import LinkBox from "utils/LinkBox";
import { FC } from "react";

const Writing: FC<{}> = () => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm space-y-2">
      <h1 className="text-4xl font-bold">Writing</h1>
      <p>
        My writing is separated into a couple of categories. (See{" "}
        <Link href="writing/blog/separation">Separation</Link> for an
        explanation on <em>why</em>.)
      </p>
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
        <LinkBox
          name="All"
          link="writing/all"
          desc="View all my writing at a glance."
        />
        <LinkBox
          name="Essays"
          link="writing/essays"
          desc="Advice and philosophy that I intend to reference for a while."
        />
        <LinkBox
          name="Blog Posts"
          link="writing/blog"
          desc="Musings, off-the-cuff observations, and interesting stories."
        />
        <LinkBox
          name="Tech"
          link="writing/tech"
          desc="Tutorials, advice, thoughts, and stories on technologies I've used."
        />
      </div>
    </div>
  );
};

export default Writing;
