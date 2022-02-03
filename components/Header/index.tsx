import Head from "next/head";

interface HeaderProps {
  title: string;
  description?: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ? description : "포트폴리오를 공유 및 관리하는 사이트"
        }
      />
      <meta property="og:title" content="Araboza" />
      <meta property="og:url" content={process.env.FRONT_SERVER_URL} />
      <meta property="og:image" content="https://bit.ly/3okIbxu" />
      <meta
        property="og:description"
        content={
          description ? description : "포트폴리오를 공유 및 관리하는 사이트"
        }
      />
      <meta property="twitter:title" content="Araboza" />
      <meta property="twitter:url" content={process.env.FRONT_SERVER_URL} />
      <meta property="twitter:image" content="https://bit.ly/3okIbxu" />
      <meta
        property="twitter:description"
        content={
          description ? description : "포트폴리오를 공유 및 관리하는 사이트"
        }
      />
    </Head>
  );
}

export default Header;
