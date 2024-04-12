import styles from "./index.module.css";
import myPhoto from "assets/my-photo.png";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>
          P-Blog
          <span className={styles.blink}>|</span>
        </h1>
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou o Pedro, estudante de
          Ciência da Computação e entusiasta da tecnologia. Aqui compartilho
          vários conhecimentos, espero que aprenda algo novo! :)
        </p>
      </div>
      <div className={styles.images}>
        <div className={styles.coloredCircle}></div>
        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Foto de perfil do dono da página — Pedro"
          aria-hidden={false}
        />
      </div>
    </section>
  );
}

export default Banner;
