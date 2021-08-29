import { FC } from "react";
import PageWrapper from "@/components/PageWrapper";

const Error404: FC<{}> = () => {
  return (
    <PageWrapper>
      <h1>404 Not Found</h1>
      <p>
        It seems you've lost your bearings, because the page you've landed on
        does not exist.
      </p>
    </PageWrapper>
  );
};

export default Error404;
