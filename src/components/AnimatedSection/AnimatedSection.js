import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedSection.module.css';

const AnimatedSection = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <div
      ref={ref}
      className={`${styles.animatedWrapper} ${inView ? styles[animationClass] : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;