import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: "dark" | "light";
}

const Input = ({ theme = "dark", ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`${styles.root} ${
        theme === "dark" ? styles.dark : styles.light
      } ${props.className ? props.className : ""}`}
    />
  );
};

export default Input;
