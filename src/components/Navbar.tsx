'use client'

import React from "react";
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className="py-8 flex justify-end-safe items-center">
            <ul className="flex gap-x-5">
                <li className={`${pathname === '/' ? 'underline' : ''}`}>About</li>
                <li className={`${pathname.includes('/work') ? 'underline' : ''}`}>Work</li>
                <li className={`${pathname.includes('/blog') ? 'underline' : ''}`}>Blog</li>
            </ul>
        </div>
    )
}

export default Navbar;