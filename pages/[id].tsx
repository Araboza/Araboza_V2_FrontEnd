import { GetServerSideProps } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import My from "../components/My";

import { UserType } from "../types";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params?.id); // id로 사용자 찾기
  return {
    props: {
      user: {
        id: "asd",
        introduce: "티모를 좋아하는 개발자 으짜고 저짜고",
        img: "https://bit.ly/35VUeLy",
        major: ["FE", "BE", "AWS"],
      },
    },
  };
};

function MyPage({ user }: { user: UserType }) {
  return (
    <div>
      <SEO
        title={`Araboza | ${user.id}`}
        description={user.introduce}
        img={user.img}
      />
      <Header />
      <My user={user} />
    </div>
  );
}

export default MyPage;
