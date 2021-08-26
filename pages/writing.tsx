import Link from "utils/Link";
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
    </div>
  );
};

export default Writing;
