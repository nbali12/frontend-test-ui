import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const sectionIds = ['section1', 'section2', 'section3'];

    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section.getBoundingClientRect().top <= 0) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'section1' ? 'active' : ''}
          >
            Section 1
          </Link>
        </li>
        <li>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'section2' ? 'active' : ''}
          >
            Section 2
          </Link>
        </li>
        <li>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'section3' ? 'active' : ''}
          >
            Section 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
