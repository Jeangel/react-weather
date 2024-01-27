import Input from "@/components/atoms/Input";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.root}>
      <Input
        placeholder="Search new place"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value}>
        <IconSearch stroke={1} size={20} />
      </Button>
    </div>
  );
};

export default Search;
