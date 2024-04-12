import styles from "./index.module.css";
import ActiveMenu from "../ActiveMenu";

function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <ActiveMenu to="/">Home</ActiveMenu>
        <ActiveMenu to="/about-me">Sobre Mim</ActiveMenu>
      </nav>
    </header>
  );
}

export default Menu;
