import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <div className={styles.ctaCard}> 
      <h2 className={styles.ctaTitle}>
        Sign up for free to get 3 months of <br />
        Premium
      </h2>
      <a href="#contact" className={styles.ctaButton}>Get started free</a>
    </div>
  );
};

export default CTA;