import Search from "@/components/molecules/Search";
import styles from "./styles.module.css";

const WeatherDashboard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Search theme="light" />
      </div>
    </div>
  );
};

export default WeatherDashboard;
