interface CountryFlagProps {
  country: string;
  description: string;
  size?: number;
}

const CountryFlag = ({ country, description, size = 25 }: CountryFlagProps) => (
  <img
    src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
    alt={description}
    width={size}
  />
);

export default CountryFlag;
