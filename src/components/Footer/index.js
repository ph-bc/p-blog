import styles from "./index.module.css";
import { ReactComponent as TradeMark } from "assets/trademark.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <TradeMark />
      Desenvolvido por Pedro.
    </footer>
  );
}

export default Footer;
