import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="FleetWise Logo" className={styles.logo} />
      </div>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#aboutus" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          </li>
          <li className={styles.navItem}>
            <a href="#pricing" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          ☰
        </button>
        <a href="#contact" className={styles.getStartedBtn}>Get started free</a> 
      </div>
    </header>
  );
};

export default Header;