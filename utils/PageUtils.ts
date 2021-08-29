import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Page } from "@/utils/types";

export const sortPagesByDate = (pages: Page[]) => {
  pages.sort((a, b) => {
    if (a.data.date && b.data.date) {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);
      return dateA > dateB ? -1 : 1;
    }
    return a.data.date != undefined ? -1 : b.data.date != undefined ? 1 : 0;
  });
  return pages;
};

const pagePaths = (dir: string) => {
  const pageDir = path.join(process.cwd(), dir);
  const pagePaths = fs
    .readdirSync(pageDir)
    .filter((path) => /\.mdx$/.test(path));
  return pagePaths;
};

export const getPages = (dir: string) => {
  const pages: Page[] = pagePaths(dir).map((pagePath) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), `${dir}/${pagePath}`)
    );
    const { content, data } = matter(source);
    return {
      slug: pagePath.replace(/\.mdx$/, ""),
      data,
      content,
    };
  });
  return pages;
};
