import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Choose Your Plan</h2>
          <p className={styles.subtitle}>
            Select the perfect plan for your fleet management needs
          </p>
        </div>
        
        <div className={styles.pricingCards}>
          {/* Core Plan */}
          <div className={styles.pricingCard}>
            <div className={`${styles.cardHeader} ${styles.coreHeader}`}>
              <h3 className={styles.planName}>Core</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.price}>
                <span className={styles.currency}>FCFA</span>
                <span className={styles.amount}>9,000</span>
                <span className={styles.period}>per vehicle/per month</span>
              </div>
              <button className={`${styles.ctaButton} ${styles.coreButton}`}>
                Try For Free
              </button>
              <p className={styles.description}>
                Everything you need to manage even the most complex fleet, including integrations with your key suppliers.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Vehicles
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Drivers
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Maintenance
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Defects
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Fuel
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.coreCheckmark}`}>✓</span>
                  Accidents
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className={styles.pricingCard}>
            <div className={`${styles.cardHeader} ${styles.advancedHeader}`}>
              <h3 className={styles.planName}>Advanced</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.price}>
                <span className={styles.contactPrice}>Contact Sales</span>
              </div>
              <button className={`${styles.ctaButton} ${styles.advancedButton}`}>
                Request Demo
              </button>
              <p className={styles.description}>
                Customise your fleet management with advanced configuration and unlimited integrations.
              </p>
              <p className={styles.includedNote}>
                Core features (included) + below.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Vehicle Orders
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Pool Vehicles
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Workshop
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Stock/Inventory
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Check Sheet Builder
                </li>
                <li className={styles.feature}>
                  <span className={`${styles.checkmark} ${styles.advancedCheckmark}`}>✓</span>
                  Advanced Reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
