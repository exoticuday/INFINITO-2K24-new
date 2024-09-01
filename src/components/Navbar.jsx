import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const handleMouseEnter = () => {
    setShowDropdown(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 5000);
  };

  const handleDropdownContentMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleDropdownContentMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 5000);
  };

  const handleMenuClick = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Handle window resize to update mobile menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 980) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav">
      <div
        className="menu-icon"
        onClick={handleMenuClick}
        aria-label="Toggle Menu"
      >
        &#9776;
      </div>
      {showMobileMenu && (
        <div className="mobile-menu">
          <div
            className="menu-icon"
            onClick={handleMenuClick}
            aria-label="Toggle Menu"
          >
            &#9776;
          </div>
          <Link to="/">Icon1</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/event">Events</Link>
          <Link>Workshops</Link>
          <Link to="sponser">Sponsers</Link>
          <Link>Accomodation</Link>
          <Link>Schedule</Link>
          <Link>Merch</Link>
          <Link>Icon2</Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <Link to="">Icon1</Link>
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/aboutUs">About Us</Link>
          {showDropdown && (
            <div
              className="dropdown-content"
              ref={dropdownRef}
              onMouseEnter={handleDropdownContentMouseEnter}
              onMouseLeave={handleDropdownContentMouseLeave}
            >
              <a href="#">Our Team</a>
              <a href="#">Our Story</a>
            </div>
          )}
        </div>
        <Link to="/event" href="#">
          Events
        </Link>
        <Link to="/workshops" href="#">
          Workshops
        </Link>
        <Link to="/sponsers" href="#">
          Sponsers
        </Link>
        <Link to="/accomodation" href="#">
          Accomodation
        </Link>
        <Link to="/schedule" href="#">
          Schedule
        </Link>
        <Link to="/merch" href="#">
          Merch
        </Link>
        <Link to="/" href="#">
          Icon2
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
