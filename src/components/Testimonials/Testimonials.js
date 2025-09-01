import React from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard'; 
import userAvatar from '../../assets/images/test_image.png';
import CTA from '../CTA/CTA'; 

// Define your testimonials data in a simple array
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO Parklane",
    avatar: userAvatar,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Fleet Manager",
    avatar: userAvatar,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
  },
    {
    id: 3,
    name: "Jane Smith",
    role: "Fleet Manager",
    avatar: userAvatar,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <div className={styles.titlesContainer}>
          <h2 className={styles.mainTitle}>Customer Success Stories</h2>
          <h2 className={styles.subTitle}>Real-world Benefits of FleetWise</h2>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navButton}>&larr;</button>
          <button className={styles.navButton}>&rarr;</button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {testimonialsData.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            avatar={testimonial.avatar}
            text={testimonial.text}
          />
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <CTA />
      </div>
    </section>
  );
}

export default Testimonials;