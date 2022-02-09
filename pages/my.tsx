import SEO from "../components/SEO";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function My() {
  return (
    <div>
      <SEO
        title="Araboza | 사용자 nickname"
        description="사용자 introduce"
        img="https://bit.ly/35VUeLy"
      />
    </div>
  );
}

export default My;
