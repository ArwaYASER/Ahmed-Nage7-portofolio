
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Problem Solving", href: "#problem-solving" },
    { name: "Achievements", href: "#achievements" },   
    { name: "YouTube", href: "#teaching" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
        >
          Ahmed<span className="text-violet-400">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition duration-300 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="text-2xl text-white lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#080816] px-6 py-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
