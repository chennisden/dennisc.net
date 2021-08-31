import { FC } from "react";

const Error404: FC<{}> = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>
        It seems you've lost your bearings, because the page you've landed on
        does not exist.
      </p>
    </>
  );
};

export default Error404;
