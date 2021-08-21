import { FC } from "react";
import NextLink from "next/link";

const Footer: FC<{}> = () => {
    return (
        <div className = "grid-rows-4 bg-black py-5 px-28 flex items-center text-white space-x-5 text-lg">
            <div className="font-bold">Dennis Chen</div>
            <div className = "col-span-2">dchen@dennisc.net</div>
            <div>CV</div>
        </div>
    );
};

export default Footer;
