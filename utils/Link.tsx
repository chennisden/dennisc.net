import { FC } from 'react';
import NextLink from 'next/link';

const Link: FC<{
    className?: string;
    href: string;
}> = ({ children, className, href }) => {
    return (
        <NextLink href={href} passHref>
            <a className={`${className} text-blue-500 hover:underline focus:outline-none focus-visible:border-2 focus-visible:border-dotted focus-visible:border-black focus-visible:rounded`}>{children}</a>
        </NextLink>
    );
};

export default Link;