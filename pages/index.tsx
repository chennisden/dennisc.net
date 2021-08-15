import Link from '../components/Link';
import { FC } from "react";

const Item: FC<{
  name: string;
  link: string;
}> = ({ children, name, link }) => (
  <span><Link href = {`${link}`}><a>{name}</a></Link><p className = "pl-6">{children}</p></span>
);

const Home: FC<{}> = () => {
  return (
    <div className = "mx-28 mt-8 space-y-2">
      <h1 className = "text-5xl font-bold">Dennis Chen's Website</h1>
      <p>Welcome to my personal website. You can find my math exposition, writing, and code here.</p>
      <h2 className = "text-3xl font-bold">Top Links</h2>
      <p>These are the projects that people tend to be the most interested in.</p>
      <h3 className = "text-xl font-bold">Math</h3>
      <ul className = "-ml-6">
        <li>
          <Item name = "Careful!" link = "resources/careful.pdf">A handout with commonly missed problems on select math contests and some psychology on how to avoid mistakes.</Item>
        </li>
      </ul>
      <h3 className = "text-xl font-bold">Writing</h3>
      <ul className = "-ml-6">
        <li>
          <Item name = "Contest Report" link = "reports/contest-creation.pdf">Written with William Dai. This is a reflection on the contests I've ran under MAC and some advice for those interested in running their own contests. (The TeX source is available <Link href = "reports/contest-creation.tex"><a>here</a></Link>.)</Item>
        </li>
      </ul>
      <h3 className = "text-xl font-bold">Code</h3>
    </div>
  );
};

export default Home;
