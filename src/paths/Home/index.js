import styles from "./index.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";

function Home() {
  return (
    <section>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
