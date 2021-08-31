import { getPages, sortPagesByDate } from "@/utils/PageUtils";
import PageList from "@/components/PageList";

export default function Page(props) {
  return (
    <>
      <h1>Tech</h1>
      <PageList parentDir="tech" pageList={props.pages} />
    </>
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
