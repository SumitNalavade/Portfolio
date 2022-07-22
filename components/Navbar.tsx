import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

interface Props {
  pageName: string
}

const Navbar: NextPage<Props> = ({ pageName }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-highlight navbar-dark">
  <div className="container-fluid">
    <Link href="/"><a className="navbar-brand">SN</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href="/about"><a style={{ "textDecoration": `${ pageName =="about" ? "underline" : "none" }` }} className="nav-link">About</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/projects"><a className="nav-link" style={{ "textDecoration": `${ pageName =="projects" ? "underline" : "none" }` }}>Projects</a></Link>
        </li>
      </ul>
      <span className="navbar-text">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href='https://github.com/SumitNalavade' target="_blank"><AiOutlineGithub /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='https://www.instagram.com/sumit.nalavade24/' target="_blank"><AiOutlineInstagram /></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href='mailto: vs.nalavade2003@gmail.com' target="_blank"><AiOutlineMail /></a>
            </li>
        </ul>
      </span>
    </div>
  </div>
</nav>
    )
}

export default Navbar;