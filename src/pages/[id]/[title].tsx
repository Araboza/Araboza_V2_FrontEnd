import { GetServerSideProps } from "next";
import DetailPage from "../../components/DetailPage";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import post from "../../sample/post.json";
import { PostType } from "../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params?.id, context.params?.title); // api 요청

  const mdxSource = await serialize(post.contents);

  return {
    props: { post, source: mdxSource },
  };
};

interface DetailProps {
  post: PostType;
  source: MDXRemoteSerializeResult;
}

function Detail({ post, source }: DetailProps) {
  return (
    <>
      <SEO title={post.title} img={post.img} />
      <Header />
      <DetailPage post={post} source={source} />
    </>
  );
}

export default Detail;
