import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import { Page } from "@/utils/types";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";

export default function All(props) {
  return (
    <PageWrapper>
      <h1>All</h1>
      <PageList parentDir="" pageList={props.pages} />
    </PageWrapper>
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
  const pages = sortPagesByDate(essayPages.concat(blogPages, techPages));
  return {
    props: {
      pages,
    },
  };
}
