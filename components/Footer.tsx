import { FC } from "react";
import NextLink from "next/link";

const Link: FC<{ href: string; className?: string; }> = ({ href, className, children }) => {
  return (
    <NextLink href={`${href}`}>
      <a className={`${className} hover:underline`}>{children}</a>
    </NextLink>
  );
}

const Footer: FC<{}> = () => {
  return (
    <div className="bg-black pt-6 pb-12 px-28">
      <div className="grid grid-cols-4 flex items-start text-white text-lg gap-x-5">
        <div className="grid gap-y-3">
          <Link href="/" className="font-bold">Dennis Chen</Link>
          <Link href="cv.pdf">CV</Link>
        </div>
        <div className="grid gap-y-3">
          <Link href="math" className="font-bold">Math</Link>
        </div>
        <div className="grid gap-y-3">
          <Link href="writing" className="font-bold">Writing</Link>
        </div>
        <div className="grid gap-y-3">
          <Link href="code" className="font-bold">Code</Link>
        </div>
      </div>
      <hr className="my-6" />
      <div className="grid grid-cols-4 flex items-center">

      </div>
    </div>
  );
};

export default Footer;
