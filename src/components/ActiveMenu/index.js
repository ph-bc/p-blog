import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

function ActiveMenu({ children, to }) {
  // O componente `NavLink` renderiza um link que navega para a rota especificada em `to`.
  // A propriedade `end` indica que este link deve corresponder exatamente à rota (correspondência exata).
  // A propriedade `isActive` é passada automaticamente pelo `NavLink` e é true se o link corresponde à rota atual.
  // O código CSS é adicionado condicionalmente à classe do link (`styles.activeLink`) apenas quando `isActive` é `true`.

  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => `
        ${styles.link} 
        ${isActive ? styles.activeLink : ""} 
      `}
    >
      {children}
    </NavLink>
  );
}

export default ActiveMenu;
