import { GetServerSideProps } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import My from "../components/My";
import Posts from "../components/Posts";

import { UserType, PostType } from "../types";

import data from "../sample/post.json";

interface UserI extends UserType {
  posts: PostType[];
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params?.id); // id로 사용자 찾기
  return {
    props: {
      user: {
        id: params?.id,
        introduce: "티모를 좋아하는 개발자 으짜고 저짜고",
        img: "https://bit.ly/35VUeLy",
        major: ["FE", "BE", "AWS"],
        posts: data,
      },
    },
  };
};

function MyPage({ user }: { user: UserI }) {
  return (
    <div>
      <SEO
        title={`Araboza | ${user.id}`}
        description={user.introduce}
        img={user.img}
      />
      <Header />
      <My user={user} />
      <Posts posts={user.posts} />
    </div>
  );
}

export default MyPage;
