import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Button from "components/Button";

function PostCard({ post }) {
  const cover = require(`assets/contents/${post.id}/cover.png`);

  return (
    // O componente `Link` é usado para criar um link para a rota específica da postagem.
    //A função `encodeURIComponent` é usada para codificar o título do post na URL, garantindo que caracteres especiais sejam tratados corretamente.
    <Link to={`/posts/${encodeURIComponent(post.title)}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          src={cover}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.title}>{post.title}</h2>
        <Button>Ler</Button>
      </div>
    </Link>
  );
}

export default PostCard;
