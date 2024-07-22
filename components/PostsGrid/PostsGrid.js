import PostItem from "../PostItem/PostItem";

import styles from "./PostsGrid.module.css";

function PostsGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem item={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostsGrid;
