import { FC } from "react";
import Link from "@/components/Link";

const Back: FC<{ href: string }> = ({ href }) => {
  return (
    <div className="self-center mb-2 flex space-x-1.5">
      <div>{`\u2190`}</div>
      <Link href={`${href}`}>
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Back;
