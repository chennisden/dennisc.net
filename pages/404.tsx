import { FC } from "react";

const Four: FC<{}> = () => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm space-y-2 ">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p>
        It appears you've lost your bearings, because the page you've landed on does not
        seem to exist.
      </p>
    </div>
  );
};

export default Four;
