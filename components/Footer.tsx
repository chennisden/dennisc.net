import { FC } from "react";
import NextLink from "next/link";

import { AiFillGithub, AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

interface footerLink {
  display: string;
  shortDisplay?: string;
  href: string;
}

const Link: FC<{ href: string; className?: string }> = ({
  href,
  className,
  children,
}) => {
  return (
    <NextLink href={`${href}`}>
      <a className={`${className} hover:underline focus-visible:outline-white`}>
        {children}
      </a>
    </NextLink>
  );
};

const FooterItem: FC<{
  mainFooterLink: footerLink;
  subFooterLinks?: footerLink[];
}> = ({ mainFooterLink, subFooterLinks }) => {
  return (
    <div className="grid gap-y-2">
      <Link href={mainFooterLink.href} className="font-bold">
        {mainFooterLink.shortDisplay ? (
          <>
            <div className="hidden sm:contents">{mainFooterLink.display}</div>
            <div className="contents sm:hidden">
              {mainFooterLink.shortDisplay}
            </div>
          </>
        ) : (
          mainFooterLink.display
        )}
      </Link>
      {subFooterLinks && (
        <div className="hidden widephone:contents">
          {subFooterLinks.map((subFooterLink) => (
            <Link href={subFooterLink.href}>
              {subFooterLink.shortDisplay ? (
                <>
                  <div className="hidden sm:contents">
                    {subFooterLink.display}
                  </div>
                  <div className="contents sm:hidden">
                    {subFooterLink.shortDisplay}
                  </div>
                </>
              ) : (
                subFooterLink.display
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer: FC<{}> = () => {
  const footerItems = [
    {
      mainFooterLink: {
        href: "/",
        display: "Dennis Chen",
        shortDisplay: "Dennis",
      },
      subFooterLinks: [
        {
          href: "cv.pdf",
          display: "CV",
        },
        {
          href: "about",
          display: "About",
        },
        {
          href: "faq",
          display: "FAQ",
        },
      ],
    },
    {
      mainFooterLink: {
        href: "math",
        display: "Math",
      },
      subFooterLinks: [
        {
          href: "https://www.mathadvance.org",
          display: "Math Advance",
        },
      ],
    },
    {
      mainFooterLink: {
        href: "writing",
        display: "Writing",
      },
      subFooterLinks: [
        {
          href: "essays",
          display: "Essays",
        },
        {
          href: "blog",
          display: "Blog",
        },
        {
          href: "tech",
          display: "Tech",
        },
      ],
    },
    {
      mainFooterLink: {
        href: "code",
        display: "Code",
      },
    },
  ];

  return (
    <div className="flex bg-black py-10 px-12 justify-center">
      <div className="w-full">
        <div className="grid widephone:grid-cols-4 items-start text-white text-lg gap-x-20 gap-y-2">
          {footerItems.map((footerItem, index) =>
            footerItem.subFooterLinks ? (
              <FooterItem
                key={index}
                mainFooterLink={footerItem.mainFooterLink}
                subFooterLinks={footerItem.subFooterLinks}
              />
            ) : (
              <FooterItem mainFooterLink={footerItem.mainFooterLink} />
            )
          )}
        </div>
        <hr className="my-6" />
        <div className="flex justify-between widephone:justify-evenly align-center text-4xl text-white">
          <Link
            href="https://github.com/chennisden"
            className="hover:text-blue-400"
          >
            <AiFillGithub />
          </Link>
          <Link href="mailto:dchen@dennisc.net" className="hover:text-blue-400">
            <AiOutlineMail />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UChpIX4Ue1DmLm8qeR0ANbRg"
            className="hover:text-blue-400"
          >
            <AiFillYoutube />
          </Link>
          <Link
            href="https://twitch.tv/chennis199"
            className="hover:text-blue-400"
          >
            <FaTwitch />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
