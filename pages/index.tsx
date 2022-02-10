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
          contents: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: "asd",
            img: "https://bit.ly/35VUeLy",
            introduce: "티모를 좋아하는 개발자",
            major: ["FE", "BE", "AWS"],
          },
        },
        {
          id: 2,
          title: "어쩌고",
          contents: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: false,
          likeNum: 0,
          user: {
            id: "asd",
            img: "https://bit.ly/35VUeLy",
            introduce: "티모를 좋아하는 개발자",
            major: ["FE", "BE", "AWS"],
          },
        },
        {
          id: 3,
          title: "어쩌고",
          contents: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: "asd",
            img: "https://bit.ly/35VUeLy",
            introduce: "티모를 좋아하는 개발자",
            major: ["FE", "BE", "AWS"],
          },
        },
        {
          id: 4,
          title: "어쩌고",
          contents: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: false,
          likeNum: 0,
          user: {
            id: "asd",
            img: "https://bit.ly/35VUeLy",
            introduce: "티모를 좋아하는 개발자",
            major: ["FE", "BE", "AWS"],
          },
        },
        {
          id: 5,
          title: "어쩌고",
          contents: "으짜고 저짜고",
          img: "https://bit.ly/34GKdB2",
          like: true,
          likeNum: 1,
          user: {
            id: "asd",
            img: "https://bit.ly/35VUeLy",
            introduce: "티모를 좋아하는 개발자",
            major: ["FE", "BE", "AWS"],
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
