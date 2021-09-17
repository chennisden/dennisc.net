import { FC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavBarItem: FC<{}> = ({ children }) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/");
  return (
    <NextLink href={`/${children}`}>
      <a
        className={`capitalize font-bold hover:underline text-white focus-visible:outline-white
          ${paths[1] == `${children}` && "text-blue-400"}`}
      >
        {children}
      </a>
    </NextLink>
  );
};

const NavBar: FC<{}> = () => {
  return (
    <div className="bg-black px-12 flex text-xl items-center py-6">
      <div className="w-full max-w-screen-md mx-auto flex flex-col widephone:flex-row justify-between gap-y-4">
        <div className="flex items-center">
          <NextLink href="/">
            <a className="focus-visible:outline-white">
              <img
                style={{ height: "35px" }}
                src="dcwhite.svg"
                className="text-white"
                alt="dc"
              />
            </a>
          </NextLink>
        </div>
        <div className="flex flex-col widephone:flex-row sm:items-center gap-x-12 gap-y-4">
          <NavBarItem>math</NavBarItem>
          <NavBarItem>writing</NavBarItem>
          <NavBarItem>code</NavBarItem>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
