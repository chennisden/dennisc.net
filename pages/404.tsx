import { FC } from "react";

const Error404: FC<{}> = () => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm space-y-2 ">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p>
        It seems you've lost your bearings, because the page you've landed on
        does not exist.
      </p>
    </div>
  );
};

export default Error404;