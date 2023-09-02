import Head from "next/head";

function PageWrapper({ className, children }) {
  return (
    <>
      <Head>
        <title>Arief Romadhon</title>
        <meta
          name="description"
          content="Arief Romadhon is a backend developer who designs, builds, and maintains the server-side components of software applications."
        />
      </Head>
      <main className={`${className} px-5`}>{children}</main>
    </>
  );
}

export default PageWrapper;
