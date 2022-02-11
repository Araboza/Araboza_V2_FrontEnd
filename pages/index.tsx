import type { NextPage } from "next";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SEO from "../components/SEO";

import { PostType } from "../types";

import data from "../sample/posts.json";

export async function getServerSideProps() {
  return {
    props: {
      posts: data,
    },
  };
}

interface HomeProps {
  posts: PostType[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <SEO title="Araboza" />
      <Header />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
