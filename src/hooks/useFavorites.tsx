import FavoritesContext from "@/context/FavoritesContext";
import { useContext } from "react";

const useFavorites = () => {
  return useContext(FavoritesContext);
};

export default useFavorites;
