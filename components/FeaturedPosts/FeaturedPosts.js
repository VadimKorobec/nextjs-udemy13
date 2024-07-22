import PostsGrid from "../PostsGrid/PostsGrid";

import styles from "./FeaturedPosts.module.css";

function FeaturedPosts() {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  );
}

export default FeaturedPosts;
