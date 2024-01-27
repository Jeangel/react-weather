import { GeolocationResponse, WeatherResponse } from "@/types/OpenWeather";
import { useQuery } from "@tanstack/react-query";

const OPEN_WEATHER_API = "http://api.openweathermap.org";

interface UseWeatherArgs {
  city: string;
}

export interface UseWeatherResponse {
  temperature: number;
  feelsLike: number;
  minTemperature: number;
  maxTemperature: number;
  pressure: number;
  humidity: number;
  description: string;
  iconId: string;
  city: string;
  country: string;
}

const useWeather = ({ city }: UseWeatherArgs) => {
  return useQuery<UseWeatherResponse>({
    enabled: false,
    queryKey: ["weather", city],
    queryFn: async () => {
      const geoParams = new URLSearchParams({
        q: city,
        limit: "1",
        appid: import.meta.env.VITE_OPEN_WEATHER_APP_ID,
      }).toString();
      const geoResponse = await fetch(
        `${OPEN_WEATHER_API}/geo/1.0/direct?${geoParams}`
      );
      const [geo]: GeolocationResponse[] = await geoResponse.json();
      const weatherParams = new URLSearchParams({
        lat: geo.lat.toString(),
        lon: geo.lon.toString(),
        units: "metric",
        appid: import.meta.env.VITE_OPEN_WEATHER_APP_ID,
      }).toString();
      const weatherResponse = await fetch(
        `${OPEN_WEATHER_API}/data/2.5/weather?${weatherParams}`
      );
      const response: WeatherResponse = await weatherResponse.json();
      const { main, weather } = response;
      return {
        feelsLike: Math.round(main.feels_like),
        temperature: Math.round(main.temp),
        minTemperature: Math.round(main.temp_min),
        maxTemperature: Math.round(main.temp_max),
        humidity: Math.round(main.humidity),
        pressure: Math.round(main.pressure),
        description: weather[0]?.description ?? "",
        iconId: weather[0]?.icon ?? "",
        city: geo.name,
        country: geo.country,
      };
    },
  });
};

export default useWeather;
