import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`${styles.root} ${props.className ? props.className : ""}`}
    />
  );
};

export default Input;
