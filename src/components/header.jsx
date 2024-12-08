import React, { useState, useEffect } from "react";
import CiCLogo from '../images/Stannum10.png';
import HamburgerIcon from "../images/menu-icon.png";
import CloseButtonIcon from "../images/close_btn.svg";
import "./header.css";
import { Phone } from 'lucide-react';
import Aos from "aos";
import "aos/dist/aos.css";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link, navigate } from 'gatsby';
import { useLocation } from "@reach/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  //====================== Home Transition ========================//
  const [homeTransition, setHomeTransition] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Close the menu whenever the location (route) changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);


  const handleHomeTransition = (e, prop) => {
    let xPos = 0;

    if (typeof window !== 'undefined') {  // Check if window is available
      // Get click position
      if (window.innerWidth < 1100) {
        xPos = e.clientX;
      } else {
        xPos = e.clientX - 20;
      }
      const yPos = e.clientY;

      // Set CSS variables based on click position
      document.documentElement.style.setProperty('--xPos', `${xPos}px`);
      document.documentElement.style.setProperty('--yPos', `${yPos}px`);

      if (prop === 'home') {
        if (currentPath === '/') {
          setHomeTransition(false);
        } else {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          setHomeTransition(true);
          setTimeout(() => {
            navigate('/');
          }, 700);
        }
      } else if (prop === 'about-us') {
        if (currentPath === '/about-us') {
          setHomeTransition(false);
        } else {
          e.preventDefault();
          window.history.pushState({}, '', '/about-us');
          setHomeTransition(true);
          setTimeout(() => {
            navigate('/about-us');
          }, 700);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (homeTransition) {
        setHomeTransition(false);
      }
    }, 1500);
  }, [homeTransition]);

  // =================== End of Home Transition ==================== //

  const [navPadding, setNavPadding] = useState('10px 5px');
  const [navBackground, setNavBackground] = useState('rgba(255, 255, 255, 1)'); 
  const [menuColor, setMenuColor] = useState('#353535');

  const handleScroll = () => {
    if (typeof window !== 'undefined') {  // Check if window is available
      if (window.scrollY > 50) {
        setNavPadding('3px 1px');
        setNavBackground('rgba(255, 255, 255, 0.404)');
        setMenuColor('#404040');
      } else {
        setNavPadding('10px 5px');
        setNavBackground('rgba(255, 255, 255, 1)');
        setMenuColor('#404040');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {  // Check if window is available
      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Simplified toggle logic
  };

  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease-in-out' });

    // Simulate loading time before showing header
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMenuOpen) {  // Check if window is available
      window.scrollTo(0, 0);
    }
  }, [isMenuOpen]);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-container") &&
        !event.target.closest(".dropdown-btn")
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="main-content">
      <nav className="nav-2" style={{ padding: navPadding, backgroundColor: navBackground }}>
        {homeTransition ? <div className='main-content-test'></div> : null}
        <div className="logo-2">
          <a href="/">
            <img data-aos="slide-right" data-aos-duration="500" className="LogoC1" src={CiCLogo} alt="Logo" />
          </a>
        </div>

        {isMenuOpen && (
          <>
            <div className="close-button" onClick={handleMobileMenuToggle}>
              <img src={CloseButtonIcon} alt="Close Button" />
            </div>
          </>
        )}

        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>


          <li className="lia testClass" data-aos="fade-down" data-aos-duration="250" data-aos-delay='200'>
            {/* <AniLink paintDrip to="/" hex="#001033">HOME</AniLink> */}
            <Link to="/" style={{ color: menuColor }} onClick={(e) => handleHomeTransition(e, 'home')}>HOME</Link>
          </li>

          {/* <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='450'>
            <AniLink paintDrip to="/about-us" hex="#001033">ABOUT US</AniLink>
            <Link to="/about-us" style={{ color: menuColor }} onClick={(e) => handleHomeTransition(e, 'about-us')}>ABOUT US</Link>
          </li> */}

          <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='700'>
            <AniLink paintDrip hex="#001033" style={{ color: menuColor }} to="/vacancies">VACANCIES</AniLink>
          </li>
         
          <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='700'>
            <AniLink paintDrip hex="#001033" style={{ color: menuColor }} to="/contact">CONTACT</AniLink>
          </li>

          <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='1150'>
            <AniLink paintDrip hex="#001033" style={{ color: menuColor }} to="/contact"><Phone /></AniLink>
          </li>
          
          <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='1150'>
            <p className="header-contact">+971505887449</p>
          </li>
          <li data-aos="fade-down" data-aos-duration="250" data-aos-delay='1150'>
            <p className="header-contact">info@stannumhrconsultancy.com</p>
          </li>

        </ul>

        <div className="hamburger-img">
          <img
            className="mobileIcon"
            onClick={handleMobileMenuToggle}
            src={HamburgerIcon}
            alt="Menu"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;