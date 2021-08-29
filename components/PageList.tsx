import { FC } from "react";
import { Page } from "@/utils/types";
import { getPages } from "@/utils/GetPages";
import LinkBox from "@/components/LinkBox";

const PageList: FC<{ parentDir: string; pageList: Page[] }> = ({
  parentDir,
  pageList,
}) => {
  return (
    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
      {pageList.map((page) => {
        return (
          <LinkBox
            key={`${parentDir}/${page.slug}`}
            // We use this as our key because
            // it is guaranteed to be unique.
            name={page.data.title}
            link={`${parentDir}/${page.slug}`}
            desc={page.data.desc}
          />
        );
      })}
    </div>
  );
};

export default PageList;
