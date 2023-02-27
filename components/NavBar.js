import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">à propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
