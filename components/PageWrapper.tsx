import { FC } from "react";

const PageWrapper: FC<{}> = ({ children }) => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm space-y-2 ">
      {children}
    </div>
  );
};

export default PageWrapper;
