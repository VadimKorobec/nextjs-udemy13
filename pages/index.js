import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

export const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJs is a the React framework for prodaction - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJs is a the React framework for prodaction - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJs is a the React framework for prodaction - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJs is a the React framework for prodaction - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
