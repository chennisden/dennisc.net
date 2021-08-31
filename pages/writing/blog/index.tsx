import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <>
      <h1>Blog Posts</h1>
      <PageList parentDir="blog" pageList={props.pages} />
    </>
  );
}

export async function getStaticProps() {
  const pages = sortPagesByDate(getPages("posts/blog"));
  return {
    props: {
      pages,
    },
  };
}
