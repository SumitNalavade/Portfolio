import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="py-8 flex justify-end-safe items-center">
            <ul className="flex gap-x-5">
                <li>About</li>
                <li>Work</li>
                <li>Blog</li>
            </ul>
        </div>
    )
}

export default Navbar;