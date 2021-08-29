import { getPages } from "@/utils/PageUtils";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <PageWrapper>
      <h1>Blog Posts</h1>
      <PageList parentDir="blog" pageList={props.pages} />
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const pages = getPages("posts/blog");
  return {
    props: {
      pages,
    },
  };
}
