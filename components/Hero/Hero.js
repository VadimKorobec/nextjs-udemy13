import Image from "next/image";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src='/images/site/Avatar.jfif' alt='avatar' width={300} height={300} />
      </div>
      <h1>Hi, my name is...</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}

export default Hero;
