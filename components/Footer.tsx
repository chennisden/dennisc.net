import { FC } from "react";
import NextLink from "next/link";

const Footer: FC<{}> = () => {
  return (
    <div className="grid grid-cols-4 bg-black py-5 px-28 flex items-start text-white text-lg gap-x-5">
      <div className="font-bold">Dennis Chen</div>
      <div className="col-span-2">dchen@dennisc.net</div>
      <div>CV</div>
    </div>
  );
};

export default Footer;
