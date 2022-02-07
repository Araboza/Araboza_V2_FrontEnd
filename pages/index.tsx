import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Araboza" />
      <Header />
    </>
  );
};

export default Home;
