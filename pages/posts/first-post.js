import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>What is Life?</h1>
        <p> Life is like water, you swim in it, you drink it, you clean your body with it.</p>
      </div>
    </Layout>
  );
};

export default FirstPost;
