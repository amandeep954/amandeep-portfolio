import React from "react";
import { NAV_LINKS } from "../constants/portfolioData";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] py-4 nav-bg backdrop-blur-xl border-b border-[var(--border)]">
      <a
        href="#home"
        className="logo text-[1.2rem] font-[800] text-text no-underline"
      >
        Aman<span className="text-coral">.</span>
      </a>
      <ul
        id="navLinks"
        className={`nav-links hidden gap-8 list-none md:flex ${menuOpen ? "open" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              onClick={() => setMenuOpen(false)}
              href={link.href}
              className="text-muted text-[.88rem] font-[500] no-underline transition-colors duration-200 relative hover:text-text after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        aria-label="Toggle navigation"
        className="ham flex flex-col gap-1.5 bg-transparent border-none cursor-pointer md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block h-0.5 w-5 bg-text"></span>
        <span className="block h-0.5 w-5 bg-text"></span>
        <span className="block h-0.5 w-5 bg-text"></span>
      </button>
    </nav>
  );
}

export default Navbar;
