import Search from "@/components/molecules/Search";
import styles from "./styles.module.css";
import FavoriteList from "@/components/molecules/FavoriteList";

const WeatherDashboard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Search data-cy="dashboard-search" theme="light" />
      </div>
      <FavoriteList />
    </div>
  );
};

export default WeatherDashboard;
