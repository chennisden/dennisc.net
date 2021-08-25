import { FC } from "react";
import NextLink from "next/link";

const NavBarItem: FC<{}> = ({ children }) => (
  <div className="px-6 py-6">
    <NextLink href={`${children}`}>
      <a className="capitalize font-bold hover:underline text-white">
        {children}
      </a>
    </NextLink>
  </div>
);

const NavBar: FC<{}> = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-md flex mx-12 sm:mx-28 text-xl items-center">
        <NextLink href="/">
          <a>
            <img
              style={{ height: "35px" }}
              src="dcwhite.svg"
              className="text-white"
              alt="dc"
            />
          </a>
        </NextLink>
        <div className="flex-grow" />
        <NavBarItem>math</NavBarItem>
        <NavBarItem>writing</NavBarItem>
        <NavBarItem>code</NavBarItem>
      </div>
    </div>
  );
};

export default NavBar;
