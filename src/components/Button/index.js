import styles from "./index.module.css";

function Button({ children, size }) {
  return (
    // As classes são concatenadas dinamicamente com base na propriedade `size` para permitir diferentes tamanhos de botão.
    <button className={`${styles.defaultBtn} ${styles[size]}`}>
      {children}
    </button>
  );
}

export default Button;
