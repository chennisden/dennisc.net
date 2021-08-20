import Link from '../components/Link';
import { FC } from "react";

const Item: FC<{
  name: string;
  link: string;
}> = ({ children, name, link }) => (
  <li><Link href = {`${link}`}>{name}</Link><p>{children}</p></li>
);

const Home: FC<{}> = () => {
  return (
    <div className = "mx-28 mt-8 space-y-2">
      <h1 className = "text-5xl font-bold">Dennis Chen's Website</h1>
      <p>Welcome to my personal website. You can find my math exposition, writing, and code here.</p>
      <h2 className = "text-3xl font-bold">Top Links</h2>
      <p>These are the projects that people tend to be the most interested in.</p>
      <h3 className = "text-xl font-bold">Math</h3>
      <ul>
        <Item name = "Careful!" link = "resources/careful.pdf">A handout with commonly missed problems on select math contests and some psychology on how to avoid mistakes.</Item>
      </ul>
      <h3 className = "text-xl font-bold">Writing</h3>
      <ul>
        <Item name = "Contest Report" link = "reports/contest-creation.pdf">Written with William Dai. This is a reflection on the contests I've ran under MAC and some advice for those interested in running their own contests. (The TeX source is available <Link href = "reports/contest-creation.tex"><a>here</a></Link>.)</Item>
      </ul>
      <h3 className = "text-xl font-bold">Code</h3>
      <ul>
        <Item name = "denniscv" link = "https://github.com/chennisden/denniscv">A LaTeX document class used to typeset CVs Scales to multiple pages.</Item>
      </ul>
      <p>If you are looking for each MAST or MAC, please visit <Link href = "https://www.mathadvance.org">mathadvance.org</Link>.</p>
      <p>Those who want to reference my old writing or materials can find it at <Link href = "https://www.geometryexplorer.xyz">geometryexplorer.xyz</Link>.</p>
    </div>
  );
};

export default Home;
