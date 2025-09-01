import React from 'react';
import styles from './TrustedBy.module.css';
import musangoLogo from '../../assets/images/musango.png'; 

const TrustedBy = () => {
  return (
    <section className={styles.trustedBy}>
      <h2 className={styles.trustedByTitle}>Trusted by</h2>
      <div className={styles.logosContainer}>
        <img src={musangoLogo} alt="Musango Logo" className={styles.logo} />
        <img src={musangoLogo} alt="Musango Logo" className={styles.logo} />
        <img src={musangoLogo} alt="Musango Logo" className={styles.logo} />
        <img src={musangoLogo} alt="Musango Logo" className={styles.logo} />
      </div>
    </section>
  );
};

export default TrustedBy;