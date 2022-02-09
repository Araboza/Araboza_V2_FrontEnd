import type { NextPage } from "next";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SEO from "../components/SEO";
import { PostType } from "../types";

export async function getServerSideProps() {
  return {
    props: {
      posts: [
        {
          id: 1,
          title: "어쩌고",
          description: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: 1,
            name: "Teemo",
            email: "example@example.com",
            img: "https://bit.ly/35VUeLy",
          },
        },
        {
          id: 2,
          title: "어쩌고",
          description: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: false,
          likeNum: 0,
          user: {
            id: 1,
            name: "Teemo",
            email: "example@example.com",
            img: "https://bit.ly/35VUeLy",
          },
        },
        {
          id: 3,
          title: "어쩌고",
          description: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: 1,
            name: "Teemo",
            email: "example@example.com",
            img: "https://bit.ly/35VUeLy",
          },
        },
        {
          id: 4,
          title: "어쩌고",
          description: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: false,
          likeNum: 0,
          user: {
            id: 1,
            name: "Teemo",
            email: "example@example.com",
            img: "https://bit.ly/35VUeLy",
          },
        },
        {
          id: 5,
          title: "어쩌고",
          description: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: 1,
            name: "Teemo",
            email: "example@example.com",
            img: "https://bit.ly/35VUeLy",
          },
        },
      ],
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
