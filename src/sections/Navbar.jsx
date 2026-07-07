import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onLinkClick}>
          Home
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onLinkClick}>
          About
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onLinkClick}>
          Projects
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onLinkClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle navigation menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.4 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;