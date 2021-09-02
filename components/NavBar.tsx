import { FC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavBarItem: FC<{}> = ({ children }) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/");
  return (
    <div className="px-6 py-6">
      <NextLink href={`/${children}`}>
        <a
          className={`capitalize font-bold hover:underline text-white focus-visible:outline-white
          ${paths[1] == `${children}` && "text-blue-400"}`}
        >
          {children}
        </a>
      </NextLink>
    </div>
  );
};

const NavBar: FC<{}> = () => {
  return (
    <div className="bg-black px-28 flex text-xl items-center">
      <div className="w-full max-w-screen-md mx-auto flex justify-between">
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
        <div className="flex items-center">
          <NavBarItem>math</NavBarItem>
          <NavBarItem>writing</NavBarItem>
          <NavBarItem>code</NavBarItem>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
