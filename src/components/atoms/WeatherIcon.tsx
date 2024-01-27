interface WeatherIconProps {
  name: string;
  description: string;
  size?: number;
}

const WeatherIcon = ({ name, description, size = 50 }: WeatherIconProps) => (
  <img
    src={`https://openweathermap.org/img/wn/${name.toLowerCase()}@2x.png`}
    alt={description}
    width={size}
  />
);

export default WeatherIcon;
