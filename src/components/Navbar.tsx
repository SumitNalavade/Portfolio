'use client'

import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const Navbar: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className="py-8 flex justify-end-safe items-center px-4">
            <ul className="flex gap-x-5">
                <li className={`${pathname === '/' ? 'underline' : ''}`}><Link href={'/'}>About</Link></li>
                <li className={`${pathname.includes('/work') ? 'underline' : ''}`}><Link href={'/work'}>Work</Link></li>
                <li className={`${pathname.includes('/blog') ? 'underline' : ''}`}><a href={'https://substack.com/@sumitnalavade'} target="_blank">Blog</a></li>
            </ul>
        </div>
    )
}

export default Navbar;