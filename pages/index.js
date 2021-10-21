import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi I'm Neha Gupta from Delhi, India. This is an experimental project made with Next.js cuz I LOVE TO LEARN MORE!!!
        </p>
        <p>Find me on <Link href="https://www.twitter.com/nayyyhaa">twitter!</Link></p>
        <p>Or, checkout <Link href="/posts/first-post">firstpost!</Link></p>
      </section>
    </Layout>
  );
}
