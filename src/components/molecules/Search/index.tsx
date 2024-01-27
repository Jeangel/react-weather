import Input from "@/components/atoms/Input";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import useSearch from "@/hooks/useSearch";

interface SearchProps {
  theme?: "dark" | "light";
}

const Search = ({ theme = "dark", ...rest }: SearchProps) => {
  const [value, setValue] = useState("Berlin");
  const { setQuery, query } = useSearch();

  const handleOnSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(value);
  };

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <form className={styles.root} onSubmit={handleOnSearch} {...rest}>
      <Input
        placeholder="Search place"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        theme={theme}
        value={value}
        type="search"
        data-cy="search-input"
      />
      <Button
        disabled={!value}
        aria-label="Search"
        type="submit"
        theme={theme}
        data-cy="search-button"
      >
        <IconSearch stroke={1} size={20} />
      </Button>
    </form>
  );
};

export default Search;
