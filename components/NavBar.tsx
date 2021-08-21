import { FC } from "react";
import NextLink from "next/link";

const NavBarItem: FC<{}> = ({ children }) => (
    <div className="px-6 py-6">
        <NextLink href={`${children}`}>
            <a className="capitalize hover:underline text-white">{children}</a>
        </NextLink>
    </div>
);

const NavBar: FC<{}> = () => {
    return (
        <div className="bg-black px-28 flex text-xl items-center">
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
            <div
                style={{
                    flexGrow: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}
            />
            <NavBarItem>math</NavBarItem>
            <NavBarItem>writing</NavBarItem>
            <NavBarItem>code</NavBarItem>
        </div>
    );
};

export default NavBar;
