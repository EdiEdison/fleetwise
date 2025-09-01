// src/components/Testimonials/TestimonialCard.js

import React from 'react';
import styles from './Testimonials.module.css';

const TestimonialCard = ({ name, role, avatar, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <p className={styles.testimonialText}>{text}</p>
    </div>
  );
};

export default TestimonialCard;