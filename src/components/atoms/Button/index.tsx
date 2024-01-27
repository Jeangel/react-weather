import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "dark" | "light";
}

const Button = ({ theme = 'dark', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles.root} ${
        theme === "dark" ? styles.dark : styles.light
      } ${props.className ? props.className : ""}`}
    />
  );
};

export default Button;
