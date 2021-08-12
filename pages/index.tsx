import Link from 'next/link'
import { FC } from "react";

const Item: FC<{
  name: string;
  link: string;
}> = ({ name, link }) => (
  <Link href = {`${link}`}><a>{name}</a></Link>
)

const Home: FC<{}> = () => {
  return (
    <div className = "mx-5">
      <h1 className = "text-5xl font-bold">Dennis Chen's Website</h1>
      <p>Welcome to my personal website. You can find my math exposition, writing, and code here.</p>
      <h2 className = "text-3xl font-bold">Top Links</h2>
      <p>These are the projects that people tend to be the most interested in.</p>
      <h3 className = "text-xl font-bold">Math</h3>
      <ul>
        <li>
          <Item name = "Careful!" link = "resources/careful.pdf"></Item>
        </li>
      </ul>
      <h3 className = "text-xl font-bold">Writing</h3>
      <h3 className = "text-xl font-bold">Code</h3>
    </div>
  );
};

export default Home;
