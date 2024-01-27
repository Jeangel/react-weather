import Search from "@/components/molecules/Search";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import useSearch from "@/hooks/useSearch";
import { format } from "date-fns";
import CountryFlag from "@/components/atoms/CountryFlag";
import WeatherIcon from "@/components/atoms/WeatherIcon";
import useFavorites from "@/hooks/useFavorites";
import { SkeletonImage } from "@/components/atoms/SkeletonImage";

const CurrentWeather = () => {
  const { addToFavorites, favorites, removeFromFavorites } = useFavorites();
  const { weather, image } = useSearch();

  const isFavorite = favorites.some((e) => e.name === weather?.city);

  const handleOnToggleFavorite = () => {
    if (!weather || !image) return;

    isFavorite
      ? removeFromFavorites(weather.city)
      : addToFavorites({ name: weather.city, image });
  };

  return (
    <section className={styles.root}>
      <nav className={styles.topBar}>
        <div className={styles.search}>
          <Search />
        </div>
        <Button disabled={!weather} onClick={handleOnToggleFavorite}>
          {isFavorite ? (
            <IconHeartFilled stroke={1} size={20} />
          ) : (
            <IconHeart stroke={1} size={20} />
          )}
        </Button>
      </nav>
      {weather && (
        <>
          <div className={styles.weather}>
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
            <div className={styles.imageContainer}>
              <SkeletonImage
                src={image}
                alt={`Photo of ${weather.city} city`}
                className={styles.image}
                width={300}
                height={200}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CurrentWeather;
