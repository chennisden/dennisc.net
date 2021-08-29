import fs from "fs";
import { getPages } from "@/utils/GetPages";
import Link from "@/components/Link";

export default function Page(props) {
  return (
    <div>
      {props.GetPages.map((page) => {
        return <p key={page.slug}>One of the paths is {page.slug}</p>;
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const GetPages = getPages("posts/essay");
  return {
    props: {
      GetPages,
    },
  };
}
