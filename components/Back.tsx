import { FC } from "react";
import Link from "utils/Link";

const Back: FC<{ href: string }> = ({ href }) => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm mb-2 flex space-x-1.5">
      <div>
        {`\u2190`}
      </div>
      <Link href={`${href}`}>
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Back;
