import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageList from "@/components/PageList";

export default function All(props) {
  return (
    <>
      <h1>All</h1>
      <PageList parentDir="" pageList={props.pages} />
    </>
  );
}

export async function getStaticProps() {
  const essayPages = getPages("posts/essays").map((page) => {
    page.slug = `essays/${page.slug}`;
    return page;
  });
  const blogPages = getPages("posts/blog").map((page) => {
    page.slug = `blog/${page.slug}`;
    return page;
  });
  const techPages = getPages("posts/tech").map((page) => {
    page.slug = `tech/${page.slug}`;
    return page;
  });
  const pages = sortPagesByDate([...essayPages, ...blogPages, ...techPages]);
  return {
    props: {
      pages,
    },
  };
}
