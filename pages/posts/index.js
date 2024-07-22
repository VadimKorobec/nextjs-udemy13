import AllPosts from "../../components/AllPosts/AllPosts";

import { DUMMY_POSTS } from "..";

function AllPostsPage() {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default AllPostsPage;
