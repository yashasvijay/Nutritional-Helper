// Navbar.js
import { useState } from "react";
import "./NavBar.css"
import Login from "./Login.js"
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Nutritional Helper
      </a>
      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Label Scanner</a>
          </li>
          <li>
            <a href="/contact">Macro-Tracker</a>
          </li>
          <li>
            <a href="/contact">Allergen-Tracker</a>
          </li>
          <li>
            <a href="Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}