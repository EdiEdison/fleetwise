import React from 'react';
import styles from './About.module.css';
import dashboardImage from '../../assets/images/admin_dashboard.png'; 

const About = () => {
  return (
    <section className={styles.keepMoving} id='aboutus'>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Keep your <br />
          business <br />
          Moving
        </h2>
        <p className={styles.text}>
          FleetWise is an African-based fleet management system meticulously tailored for the unique challenges and opportunities of African businesses. We believe that you should focus on what you do best—growing your business—while we handle the complex, but essential, task of managing your fleet.
        </p>
        <a href="#try-for-free" className={styles.link}>
          Try for free
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={dashboardImage}
          alt="Fleet Management Admin Dashboard"
          className={styles.dashboardImage}
        />
      </div>
    </section>
  );
};

export default About;