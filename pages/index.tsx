import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  return (
    <div>
      <SEO title="Araboza" />
      <Header />
    </div>
  );
};

export default Home;
