import PostContent from "components/PostContent";
import styles from "./index.module.css";
import coverPhoto from "assets/coverAboutMe.png";
import aboutMePhoto from "assets/aboutMePhoto.png";

function AboutMe() {
  return (
    <section>
      <PostContent coverPhoto={coverPhoto} title="Sobre Mim">
        <h3 className={styles.subtitle}>Olá, eu sou o Pedro!</h3>
        <img
          src={aboutMePhoto}
          alt="Foto do criador do blog, Pedro."
          className={styles.aboutMePhoto}
        />

        <p className={styles.paragraph}>
          Olá, tudo bem? Meu nome é Pedro, sou estudante de ciência da
          computação e estou entusiasmado por compartilhar um pouco sobre mim.
        </p>
        <p className={styles.paragraph}>
          Minha jornada com a programação começou em São Paulo, onde nasci, mas
          foi em Mogi Guaçu, onde moro há 12 anos, que realmente desenvolvi
          minha paixão por tecnologia e games.
        </p>
        <p className={styles.paragraph}>
          Atualmente, estou aprimorando minhas habilidades em Desenvolvimento
          Web Front-End através dos cursos da Alura. Aprender algo novo a cada
          dia é algo que realmente me motiva.
        </p>
        <p className={styles.paragraph}>
          Além da programação, tenho um grande interesse por música e games, o
          que me ajuda a relaxar e encontrar inspiração para meus projetos.
        </p>
        <p className={styles.paragraph}>
          A cada novo desafio que enfrento, seja em meus estudos ou hobbies,
          encontro oportunidades para crescer e expandir meus horizontes.
        </p>
        <p className={styles.paragraph}>
          Espero que, ao compartilhar minhas experiências e conhecimentos, eu
          possa inspirar e ajudar outros estudantes como eu a alcançar seus
          objetivos e descobrir a alegria na tecnologia.
        </p>
      </PostContent>
    </section>
  );
}

export default AboutMe;
