import styles from './Footer.module.css';
import footerLogo from '../../assets/images/logo.png'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaXTwitter } from 'react-icons/fa6'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={footerLogo} alt="FleetWise Logo" className={styles.logo} />
      </div>
      <p className={styles.socialText}>Follow us on all social platforms</p>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" aria-label="Facebook" className={styles.iconLink}>
          <FaFacebookF className={styles.icon} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className={styles.iconLink}>
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.iconLink}>
          <FaLinkedinIn className={styles.icon} />
        </a>
        <a href="https://twitter.com" aria-label="X" className={styles.iconLink}>
          <FaXTwitter className={styles.icon} />
        </a>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.copyright}>
        Copyright© 2025 FleetWise – All rights reserved
      </p>
    </footer>
  );
};

export default Footer;