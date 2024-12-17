import { useState } from 'react';
import { Link } from 'react-scroll';  // Import the Link component from react-scroll
import menu from '../assets/open_menu.svg';
import close from '../assets/close_menu.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <span><a href='#'>Carl Paño</a></span>
      <button className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Navigation Menu'
        aria-expanded={isOpen}
      >
        <img src={isOpen ? close : menu} alt="menu" />
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            {/* Use the Link component from react-scroll to enable smooth scroll */}
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-70} // Optional: Adjust for any fixed header offset
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-70} // Optional: Adjust for any fixed header offset
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70} // Optional: Adjust for any fixed header offset
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
