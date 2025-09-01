import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <h2 className={styles.title}>Get in touch with us</h2>
      <p className={styles.subtitle}>Let us know how we can help your business grow.</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="First Name" className={styles.input} required />
          <input type="text" placeholder="Last Name" className={styles.input} required />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Company Name" className={styles.input} required />
          <input type="tel" placeholder="Phone Number" className={styles.input} required />
        </div>
        <input type="email" placeholder="Email Address" className={styles.fullWidthInput} required />
        <textarea placeholder="Tell us more about your needs" className={styles.textarea} rows="5" required></textarea>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
};

export default Contact;