import useFavorites from "@/hooks/useFavorites";
import styles from "./styles.module.css";
import { SkeletonImage } from "@/components/atoms/SkeletonImage";
import useSearch from "@/hooks/useSearch";
import { IconX } from "@tabler/icons-react";

const FavoriteList = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { setQuery } = useSearch();

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>My favorites</h2>
      <div className={styles.items}>
        {favorites.map((favorite) => (
          <div
            className={styles.item}
            key={favorite.name}
            onClick={() => setQuery(favorite.name)}
            role="button"
            aria-label={`Show ${favorite.name}`}
          >
            <button
              aria-label="Remove"
              className={styles.removeButton}
              onClick={() => removeFromFavorites(favorite.name)}
            >
              <IconX size={20} stroke={1} />
            </button>
            <SkeletonImage
              src={favorite.image}
              alt={favorite.name}
              height={150}
              width={150}
              className={styles.image}
            />
            <p className={styles.name}>{favorite.name}</p>
          </div>
        ))}
        {favorites.length === 0 ? (
          <div className={`${styles.item} ${styles.emptyItem}`}></div>
        ) : null}
        {favorites.length <= 1 ? (
          <div className={`${styles.item} ${styles.emptyItem}`}></div>
        ) : null}
      </div>
    </div>
  );
};

export default FavoriteList;
