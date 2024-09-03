// import React from 'react';
// import "./navbar.css";
// import { useState,useRef } from 'react';




// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   let timeoutId = null;

//   const handleMouseEnter = () => {
//     setShowDropdown(true);
//     clearTimeout(timeoutId); 
//   };

//   const handleMouseLeave = () => {

//     timeoutId = setTimeout(() => {
//       setShowDropdown(false);
//     }, 500);
//   };

//   const handleDropdownContentMouseEnter = () => {
//     clearTimeout(timeoutId); 
//   };

//   const handleDropdownContentMouseLeave = () => {

//     timeoutId = setTimeout(() => {
//       setShowDropdown(false);
//     }, 5000);
//   };

//   return (
//     <div className='nav'>
//       <a href="#">Icon1</a>
//       <div
//         className='dropdown'
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <a href="#">About Us</a>
//         {showDropdown && (
//           <div
//             className='dropdown-content'
//             ref={dropdownRef}
//             onMouseEnter={handleDropdownContentMouseEnter}
//             onMouseLeave={handleDropdownContentMouseLeave}
//           >
//             <a href="#">Our Team</a>
//             <a href="#">Our Story</a>
//           </div>
//         )}
//       </div>
//       <a href="#">Events</a>
//       <a href="#">Workshops</a>
//       <a href="#">Sponsers</a>
//       <a href="#">Accomodation</a>
//       <a href="#">Schedule</a>
//       <a href="#">Merch</a>
//       <a href="#">Icon2</a>
//     </div>
//   );
// }

// export default Navbar;


// import React, { useState, useRef, useEffect } from 'react';
// import './navbar.css';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const dropdownRef = useRef(null);
//   let timeoutId = null;

//   const handleMouseEnter = () => {
//     setShowDropdown(true);
//     clearTimeout(timeoutId);
//   };

//   const handleMouseLeave = () => {
//     timeoutId = setTimeout(() => {
//       setShowDropdown(false);
//     }, 5000);
//   };

//   const handleDropdownContentMouseEnter = () => {
//     clearTimeout(timeoutId);
//   };

//   const handleDropdownContentMouseLeave = () => {
//     timeoutId = setTimeout(() => {
//       setShowDropdown(false);
//     }, 5000);
//   };

//   const handleMenuClick = () => {
//     setShowMobileMenu(prev => !prev);
//   };

 
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 980) {
//         setShowMobileMenu(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className='nav'>
      
//       <div className='menu-icon' onClick={handleMenuClick} aria-label="Toggle Menu">
//         &#9776; 
//       </div>
      
      
//       {showMobileMenu && (
//         <div className='mobile-menu'>
//           <a href="#">Icon1</a>
//           <a href="#">About Us</a>
//           <a href="#">Events</a>
//           <a href="#">Workshops</a>
//           <a href="#">Sponsers</a>
//           <a href="#">Accomodation</a>
//           <a href="#">Schedule</a>
//           <a href="#">Merch</a>
//           <a href="#">Icon2</a>
//         </div>
//       )}

//       {/* Desktop Menu */}
//       <div className='desktop-menu'>
//         <a href="#">Icon1</a>
//         <div
//           className='dropdown'
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <a href="#">About Us</a>
//           {showDropdown && (
//             <div
//               className='dropdown-content'
//               ref={dropdownRef}
//               onMouseEnter={handleDropdownContentMouseEnter}
//               onMouseLeave={handleDropdownContentMouseLeave}
//             >
//               <a href="#">Our Team</a>
//               <a href="#">Our Story</a>
//             </div>
//           )}
//         </div>
//         <a href="#">Events</a>
//         <a href="#">Workshops</a>
//         <a href="#">Sponsers</a>
//         <a href="#">Accomodation</a>
//         <a href="#">Schedule</a>
//         <a href="#">Merch</a>
//         <a href="#">Icon2</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../pages/assets/infinito-logo.png';

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
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
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
          {/* <Link to="/">Icon1</Link> */}
          
          <Link to="/">Home</Link>
          <Link to="/event">Events</Link>
          <Link to="/aboutUs">Team</Link>
          <Link to="/sponser">Sponsers</Link>
          
          <Link to="/accomodation">Accomodation</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/merch">Merch</Link>
          {/* <Link to="/">Icon2</Link> */}
        </div>
      )}
      <div className="desktop-menu">
        <Link to="/">Icon1</Link>
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/aboutUs">About Us</Link>
          
        </div>
        <Link to="/event">Events</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/sponsers">Sponsers</Link>
        <Link to="/accomodation">Accomodation</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/">Icon2</Link>
      </div>
    </div>
  );
};

export default Navbar;
