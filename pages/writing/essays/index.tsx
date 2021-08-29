import { getPages } from "@/utils/PageUtils";
import PageWrapper from "@/components/PageWrapper";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <PageWrapper>
      <h1>Essays</h1>
      <PageList parentDir="essays" pageList={props.pages} />
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const pages = getPages("posts/essays");
  return {
    props: {
      pages,
    },
  };
}
