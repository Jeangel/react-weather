import { createContext, useState } from "react";

interface FavoriteLocation {
  name: string;
  image: string;
}

interface FavoritesContextValue {
  favorites: FavoriteLocation[];
  addToFavorites: (location: FavoriteLocation) => void;
  removeFromFavorites: (name: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteLocation[]>([]);

  const addToFavorites = (location: FavoriteLocation) => {
    setFavorites((prev) => prev.concat(location));
  };
  const removeFromFavorites = (name: string) => {
    setFavorites((prev) => prev.filter((e) => e.name !== name));
  };

  return (
    <FavoritesContext.Provider
      value={{ addToFavorites, removeFromFavorites, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
