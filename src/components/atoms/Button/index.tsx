import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles.root} ${props.className ? props.className : ""}`}
    />
  );
};

export default Button;
