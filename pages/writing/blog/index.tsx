import { getPages } from "@/utils/GetPages";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <PageWrapper>
      <PageList parentDir="posts/blog" pageList={props.pages} />
    </PageWrapper>
  );
}

export async function getStaticProps(context) {
  const pages = getPages("posts/blog");
  return {
    props: {
      pages,
    },
  };
}
