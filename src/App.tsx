import styles from "./app.module.css";
import CurrentWeather from "./components/organisms/CurrentWeather";
import WeatherDashboard from "./components/organisms/WeatherDashboard";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <div className={styles.root}>
          <CurrentWeather />
          <WeatherDashboard />
        </div>
      </FavoritesProvider>
    </SearchProvider>
  );
}

export default App;
