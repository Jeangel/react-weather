import styles from "./app.module.css";
import CurrentWeather from "./components/organisms/CurrentWeather";
import WeatherDashboard from "./components/organisms/WeatherDashboard";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className={styles.root}>
        <CurrentWeather />
        <WeatherDashboard />
      </div>
    </SearchProvider>
  );
}

export default App;
