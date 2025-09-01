import styles from './DashboardImage.module.css';
import dashboardImg from '../../assets/images/dashboard.png'; 

const DashboardImage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <img
        src={dashboardImg}
        alt="FleetWise Dashboard Mockup"
        className={styles.dashboardImage}
      />
    </div>
  );
};

export default DashboardImage;