import { FC } from "react";
import NextLink from "next/link";

import { AiFillGithub, AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

const Link: FC<{ href: string; className?: string }> = ({
  href,
  className,
  children,
}) => {
  return (
    <NextLink href={`${href}`}>
      <a className={`${className} hover:underline focus:text-blue-400`}>{children}</a>
    </NextLink>
  );
};

const Footer: FC<{}> = () => {
  return (
    <div className="flex bg-black py-10 px-12 sm:px-28 justify-center">
      <div>
        <div className="grid grid-cols-4 flex items-start text-white text-lg gap-x-20">
          <div className="grid gap-y-2">
            <Link href="/" className="font-bold">
              Dennis Chen
            </Link>
            <Link href="cv.pdf">CV</Link>
            <Link href="about">About</Link>
            <Link href="faq">FAQ</Link>
          </div>
          <div className="grid gap-y-2">
            <Link href="math" className="font-bold">
              Math
            </Link>
            <Link href="https://www.mathadvance.org">Math Advance!</Link>
          </div>
          <div className="grid gap-y-2">
            <Link href="writing" className="font-bold">
              Writing
            </Link>
            <Link href="writing/essay">Essays</Link>
            <Link href="writing/blog">Blog</Link>
            <Link href="writing/tech">Tech</Link>
          </div>
          <div className="grid gap-y-2">
            <Link href="code" className="font-bold">
              Code
            </Link>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-evenly align-center text-4xl text-white">
          <Link href="https://github.com/chennisden">
            <a>
              <AiFillGithub />
            </a>
          </Link>
          <Link href="mailto:dchen@dennisc.net">
            <a>
              <AiOutlineMail />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UChpIX4Ue1DmLm8qeR0ANbRg">
            <a>
              <AiFillYoutube />
            </a>
          </Link>
          <Link href="https://twitch.tv/chennis199">
            <a>
              <FaTwitch />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
