import Head from "next/head";

interface HeaderProps {
  title: string;
  description?: string;
}

function SEO({ title, description }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ? description : "포트폴리오를 공유 및 관리하는 사이트"
        }
      />
    </Head>
  );
}

export default SEO;
