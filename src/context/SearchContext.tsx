import { usePhoto } from "@/hooks/usePhoto";
import useWeather, { UseWeatherResponse } from "@/hooks/useWeather";
import { createContext, useEffect, useState } from "react";

interface SearchContextValue {
  weather?: UseWeatherResponse;
  image?: string;
  isLoading: boolean;
  query: string;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextValue>({
  weather: undefined,
  image: undefined,
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
  const { data: photo, refetch: fetchPhoto } = usePhoto({ name: query });

  useEffect(() => {
    if (query) {
      fetchWeather().then(() => {
        fetchPhoto();
      });
    }
  }, [query, fetchWeather, fetchPhoto]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        isLoading: isLoading,
        image: photo,
        weather,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
