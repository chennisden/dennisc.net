import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <>
      <h1>Essays</h1>
      <PageList parentDir="essays" pageList={props.pages} />
    </>
  );
}

export async function getStaticProps() {
  const pages = sortPagesByDate(getPages("posts/essays"));
  return {
    props: {
      pages,
    },
  };
}
