import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const sectionIds = ['CoffeeTables', 'SideTables', 'MediaUnits', 'TableSets'];

    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section.getBoundingClientRect().top <= 0 && section.getBoundingClientRect().bottom >= 0) {
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
            to="CoffeeTables"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'CoffeeTables' ? 'active' : ''}
          >
            Coffee Tables
          </Link>
        </li>
        <li>
          <Link
            to="SideTables"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'SideTables' ? 'active' : ''}
          >
            Side Tables
          </Link>
        </li>
        <li>
          <Link
            to="MediaUnits"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'MediaUnits' ? 'active' : ''}
          >
            Media Units
          </Link>
        </li>
        <li>
          <Link
            to="TableSets"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeSection === 'TableSets' ? 'active' : ''}
          >
            Table Sets
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
