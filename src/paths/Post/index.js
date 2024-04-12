import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostContent from "components/PostContent";
import ReactMarkdown from "react-markdown";
import NotFound from "paths/NotFound";
import Default from "components/Default";
import PostCard from "components/PostCard";

function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.title === params.title;
  });

  if (!post) {
    return <NotFound />;
  }

  const cover = require(`assets/contents/${post.id}/cover.png`);

  const recommendedPosts = posts
    .filter((recommendedPost) => {
      if (post.id > 4) {
        return recommendedPost.id !== post.id && recommendedPost.id < post.id;
      } else {
        return recommendedPost.id !== post.id;
      }
    })
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Default>
      <PostContent coverPhoto={cover} title={post.title}>
        <div className={styles.post_markdown_container}>
          <ReactMarkdown>{post.text}</ReactMarkdown>
        </div>

        <div className={styles.recommended_posts_container}>
          <h3>Outros posts que você pode gostar:</h3>
          <ul className={styles.recommended_posts}>
            {recommendedPosts.map((post) => (
              <li key={post.id} onClick={() => window.scrollTo(0, 0)}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </PostContent>
    </Default>
  );
}

export default Post;
