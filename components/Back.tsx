import { FC } from "react";
import NextLink from "next/link";

const Back: FC<{ href: string }> = ({ href }) => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm mb-2">
      {`\u2190`}
      <NextLink href={`${href}`}>
        <a className="ml-1.5 hover:underline text-blue-500">Back</a>
      </NextLink>
    </div>
  );
};

export default Back;
