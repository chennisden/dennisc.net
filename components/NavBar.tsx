import { FC } from "react";
import NextLink from "next/link";

const NavBarItem: FC<{}> = ({children}) => (
    <NextLink href = {`${children}`}><a className="capitalize">{children}</a></NextLink>
);

const NavBar: FC<{}> = () => {
    return (
        <div className = "px-20 py-6 space-x-6 flex text-xl">
            <div style={{
                flexGrow: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
            }}/>
            <NavBarItem>Math</NavBarItem>
            <NavBarItem>Writing</NavBarItem>
            <NavBarItem>Code</NavBarItem>
        </div>
    );
};

export default NavBar;