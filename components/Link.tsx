import { FC } from 'react';
import NextLink from 'next/link';

const Link: FC<{
    className?: string;
    href: string;
}> = ({ children, className, href }) => {
    return (
        <NextLink href = {href} passHref>
            <a className = {className = `${className} text-blue-500 hover:underline`}>{children}</a>
        </NextLink>
    );
};

export default Link;