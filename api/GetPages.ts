import fs from "fs";
import path from "path";
import Page from "types/Page";

const pagePaths = (dir: string,) => {
    const pageDir = path.join(process.cwd(), `${dir}`);
    return fs.readdirSync(pageDir).filter((path) => /\.mdx$/.test(path));
}