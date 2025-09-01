// src/components/Hero/Hero.js

import React from 'react';
import styles from './Hero.module.css';
const Hero = () => {
 return (
   <section className={styles.hero} id='home'>
     <div className={styles.heroContent}>
       <h1 className={styles.heroTitle}>
         Manage your fleet easily, <br />
         you can focus on your business
       </h1>
       <p className={styles.heroSubtitle}>
         Efficiently manage your fleet, anywhere, anytime
       </p>
       <div className={styles.heroActions}>
         <a href="#contact" className={styles.getStartedBtn}>Get started free</a>
         <button className={styles.talkToUsBtn}>Talk to us</button>
       </div>
     </div>
   </section>
 );
};

export default Hero;