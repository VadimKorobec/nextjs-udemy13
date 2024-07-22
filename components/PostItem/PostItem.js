import Link from "next/link";
import Image from "next/image";

import styles from "./PostItem.module.css";

function PostItem({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${post.image}`;

  return (
    <div className={styles.post}>
      <Link href="">
        <div className={styles.image}>
          <Image src={imagePath} alt={post.title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostItem();
