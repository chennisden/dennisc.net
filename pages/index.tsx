import Link from "../utils/Link";
import { FC } from "react";

const Item: FC<{
  name: string;
  link: string;
}> = ({ children, name, link }) => (
  <li>
    <Link href={`${link}`}>{name}</Link>
    <p>{children}</p>
  </li>
);

const Home: FC<{}> = () => {
  return (
    <div className="self-center mx-12 sm:mx-28 w-full max-w-screen-sm space-y-2 ">
      <h1 className="text-4xl font-bold">Dennis Chen's Website</h1>
      <p>
        Welcome to my personal website. You can find my math exposition,
        writing, and code here.
      </p>
      <h2 className="text-2xl font-bold">Top Links</h2>
      <p>
        This is my content that I think is most relevant, has been referenced
        more often, or have garnered the most interest.
      </p>
      <h3 className="text-xl font-bold">Math</h3>
      <ul>
        <Item name="Math Advance!" link="https://www.mathadvance.org">
          Math Advance! is the parent organization of MAC, the group behind the
          JMCs and MAT, and MAST, an online AIME training program modeled after
          Evan Chen's <Link href="https://web.evanchen.cc/otis.html">OTIS</Link>
          . This is the organization most people seem to know me for.
        </Item>
        <Item name="Careful!" link="resources/careful.pdf">
          A handout with commonly missed problems on select math contests and
          some psychology on how to avoid mistakes.
        </Item>
      </ul>
      <h3 className="text-xl font-bold">Writing</h3>
      <ul>
        <Item name="Contest Report" link="reports/contest-creation.pdf">
          Written with William Dai. This is a reflection on the contests I've
          ran under MAC and some advice for those interested in running their
          own contests. (The TeX source is available{" "}
          <Link href="reports/contest-creation.tex">
            <a>here</a>
          </Link>
          .)
        </Item>
      </ul>
      <h3 className="text-xl font-bold">Code</h3>
      <ul>
        <Item name="denniscv" link="https://github.com/chennisden/denniscv">
          A LaTeX document class used to typeset CVs. Scales to multiple pages.
        </Item>
      </ul>
      <p>
        If you are looking for each MAST or MAC, please visit{" "}
        <Link href="https://www.mathadvance.org">mathadvance.org</Link>.
      </p>
      <p>
        Those who want to reference my old writing or materials can find it at{" "}
        <Link href="https://www.geometryexplorer.xyz">
          geometryexplorer.xyz
        </Link>
        .
      </p>
    </div>
  );
};

export default Home;
