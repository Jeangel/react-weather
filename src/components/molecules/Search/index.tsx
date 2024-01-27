import Input from "@/components/atoms/Input";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import useSearch from "@/hooks/useSearch";

interface SearchProps {
  theme?: "dark" | "light";
}

const Search = ({ theme = "dark" }: SearchProps) => {
  const [value, setValue] = useState("");
  const { setQuery } = useSearch();

  const handleOnSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <form className={styles.root} onSubmit={handleOnSearch}>
      <Input
        placeholder="Search new place"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        theme={theme}
      />
      <Button disabled={!value} aria-label="Search" type="submit" theme={theme}>
        <IconSearch stroke={1} size={20} />
      </Button>
    </form>
  );
};

export default Search;
