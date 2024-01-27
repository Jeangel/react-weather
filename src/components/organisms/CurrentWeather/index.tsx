import Search from "@/components/molecules/Search";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button";
import { IconHeart } from "@tabler/icons-react";
import useSearch from "@/hooks/useSearch";
import { format } from "date-fns";
import CountryFlag from "@/components/atoms/CountryFlag";
import WeatherIcon from "@/components/atoms/WeatherIcon";

const CurrentWeather = () => {
  const { weather } = useSearch();

  return (
    <section className={styles.root}>
      <nav className={styles.topBar}>
        <div className={styles.search}>
          <Search />
        </div>
        <Button disabled>
          <IconHeart stroke={1} size={20} />
        </Button>
      </nav>
      <div className={styles.weather}>
        {weather && (
          <>
            <div className={styles.dateContainer}>
              <WeatherIcon
                name={weather.iconId}
                description={`${weather.description} icon`}
              />
              <div className={styles.date}>
                <h1>Today</h1>
                <p>{format(new Date(), "EEE, d LLL")}</p>
              </div>
            </div>
            <p className={styles.temperature}>{weather?.temperature}&#176;C</p>
            <div className={styles.location}>
              <CountryFlag
                country={weather.country}
                description={`${weather.city} ${weather.country} flag`}
              />
              <span>{weather.city}</span>
            </div>
            <div className={styles.details}>
              <span>Feels like {weather.feelsLike}&#176;C</span>
              <span>&#x2022;</span>
              <span>Humidity {weather.humidity}%</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CurrentWeather;
