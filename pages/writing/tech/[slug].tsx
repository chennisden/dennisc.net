import PageRender from "@/components/PageRender";
import { getPages } from "@/utils/PageUtils";
import fs from "fs";
import matter from "gray-matter";

export default function Page(props) {
  return <PageRender props={props} />;
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(`posts/tech/${params.slug}.mdx`);
  const { content, data } = matter(source);
  const slug = params.slug;
  return {
    props: {
      content,
      data,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const essayPaths = getPages("posts/tech").map((page) => {
    const path = page.slug;
    return path;
  });
  const paths = essayPaths
    .map((path) => path.replace(/\.mdx$/, ""))
    .map((slug) => ({ params: { slug: `${slug}` } }));
  return {
    paths,
    fallback: false,
  };
}
