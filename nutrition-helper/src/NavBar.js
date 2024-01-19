import { useState } from "react";
import "./NavBar.css";
import icon from './images/icon1.png'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img className="icon" src={icon} alt="Description" />
      <a href="/" className="brand-name">
        Nutritional Helper
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
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
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="Home" href="/Home">Home</a>
          </li>
          <li>
            <a className="Scanner" href="/Scanner">Scanner</a>
          </li>
          <li>
            <a className="Macros" href="/Macros">Macro-Tracker</a>
          </li>
          <li>
            <a className="Allergens" href="/Allergens">Allergen-Tracker</a>
          </li>
          <li>
            <a className="Login" href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}