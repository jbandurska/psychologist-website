import "./Header.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const dropdownMenu = useRef(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (dropdownMenu.current) {
      (dropdownMenu.current as HTMLElement).classList.toggle("unfolded");
      const buttonBars = document.querySelectorAll(".menu-button .bar");
      buttonBars.forEach((bar) => bar.classList.toggle("crossed"));
    }
  };

  return (
    <header id="header">
      <div className="header-elements">
        <div className="logo">
          <Link to="/">
            <img src="images/logo.png" alt="logo" loading="lazy" />
          </Link>
        </div>
        <ul className="regular-menu">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="o-mnie">O mnie</Link>
          </li>
          <li>
            <Link to="oferta">Oferta</Link>
          </li>
          <li>
            <Link to="cennik">Cennik</Link>
          </li>
          <li>
            <Link to="kontakt">Kontakt</Link>
          </li>
        </ul>
        <ul ref={dropdownMenu} className="dropdown-menu" onClick={toggleMenu}>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="o-mnie">O mnie</Link>
          </li>
          <li>
            <Link to="oferta">Oferta</Link>
          </li>
          <li>
            <Link to="cennik">Cennik</Link>
          </li>
          <li>
            <Link to="kontakt">Kontakt</Link>
          </li>
        </ul>
        <div className="menu-button" role="button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
