import { FC } from "react";
import NextLink from "next/link";

const NavBarItem: FC<{}> = ({children}) => (
    <NextLink href = {`${children}`}><a className="capitalize">{children}</a></NextLink>
);

const NavBar: FC<{}> = () => {
    return (
        <div className = "space-x-6 flex text-xl">
            <NavBarItem>Math</NavBarItem>
            <NavBarItem>Writing</NavBarItem>
            <NavBarItem>Code</NavBarItem>
        </div>
    );
};

export default NavBar;