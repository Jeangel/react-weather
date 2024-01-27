import useWeather, { UseWeatherResponse } from "@/hooks/useWeather";
import { createContext, useEffect, useState } from "react";

interface SearchContextValue {
  weather?: UseWeatherResponse;
  location?: object;
  isLoading: boolean;
  query: string;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextValue>({
  weather: undefined,
  location: undefined,
  isLoading: false,
  query: "",
  setQuery: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState("Berlin");
  const {
    data: weather,
    refetch: fetchWeather,
    isLoading,
  } = useWeather({ city: query });

  useEffect(() => {
    if (query) {
      fetchWeather();
    }
  }, [query, fetchWeather]);

  return (
    <SearchContext.Provider
      value={{ query, setQuery, isLoading, location: undefined, weather }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
