import styles from "./index.module.css";

function PostContent({ coverPhoto, title, children }) {
  return (
    <article className={styles.postContainerModel}>
      <div
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
}

export default PostContent;
