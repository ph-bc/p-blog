import Button from "components/Button";
import styles from "./index.module.css";
import error404 from "assets/error_404.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const browse = useNavigate();

  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>Ops! Página Não Encontrada.</h1>
        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.buttonContainer} onClick={() => browse(-1)}>
          <Button size="lg">Voltar</Button>
        </div>
        <img
          className={styles.dogImage}
          src={error404}
          alt="Cachorrinho de óculos informando que a página não existe"
        />
      </div>
      <div className={styles.whiteSpace}></div>
    </>
  );
}

export default NotFound;
