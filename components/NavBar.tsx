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
        <div className="bg-black grid w-full">
            <div className="max-w-screen-md mx-auto px-12 sm:px-28 text-xl max-w-screen-md">
                <div className="relative justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex">
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

                        <NavBarItem>math</NavBarItem>
                        <NavBarItem>writing</NavBarItem>
                        <NavBarItem>code</NavBarItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
