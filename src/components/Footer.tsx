import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {

    return (
        <div className="py-12 flex w-full bg justify-between items-center text-sm">
            <a href="mailto:vs.nalavade2003@gmail.com">vs.nalavade2003@gmail.com</a>

            <ul className="flex gap-x-4">
                <a href="https://www.linkedin.com/in/sumit-nalavade/">{<FaLinkedin className="text-lg" />}</a>
                <a href="https://x.com/SumitNalavade3">{<FaXTwitter className="text-lg" />}</a>
            </ul>
        </div>
    )
}

export default Footer;