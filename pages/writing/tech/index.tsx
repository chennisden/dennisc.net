import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <PageWrapper>
      <h1>Tech</h1>
      <PageList parentDir="tech" pageList={props.pages} />
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const pages = sortPagesByDate(getPages("posts/tech"));
  return {
    props: {
      pages,
    },
  };
}
