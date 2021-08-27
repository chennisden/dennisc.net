import { FC } from "react";
import NextLink from "next/link";

const LinkBox: FC<{ name: string; link: string; desc?: string }> = ({
  name,
  link,
  desc,
}) => {
  return (
    <NextLink href={`${link}`}>
      <a className="rounded-lg border-2 border-gray-200 hover:text-blue-600 px-5 py-4 space-y-2">
        <div className="text-xl font-bold">{`${name}`}</div>
        <div>{`${desc}`}</div>
      </a>
    </NextLink>
  );
};

export default LinkBox;
