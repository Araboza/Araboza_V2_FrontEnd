import { GetServerSideProps } from "next";
import SEO from "../../components/SEO";

import data from "../../sample/post.json";
import { PostType } from "../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params?.id, context.params?.title); // api 요청
  return {
    props: { post: data },
  };
};

interface DetailProps {
  post: PostType;
}

function Detail({ post }: DetailProps) {
  return (
    <SEO
      title={post.title}
      description={post.contents.slice(0, 10)}
      img={post.img}
    />
  );
}

export default Detail;
