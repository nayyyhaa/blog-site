import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/post";
import Date from "../components/date";

export async function getStaticProps() {
  //const allPostsData = getSortedPostsData();
  const apiResponse = await fetch(
    "https://dev.to/api/articles?username=nayyyhaa"
  );
  const allPostsData = await apiResponse.json();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi I'm Neha Gupta from Delhi, India. This is an experimental project
          made with Next.js cuz I LOVE TO LEARN MORE!!!
        </p>
        <p>
          Find me on{" "}
          <Link href="https://www.twitter.com/nayyyhaa">twitter!</Link>
        </p>
        {/* <p>
          Or, checkout <Link href="/posts/first-post">firstpost!</Link>
        </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, published_at, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={published_at} />
              </small>
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const postIds = async () => {
  const apiResponse = await fetch(
    "https://dev.to/api/articles?username=nayyyhaa"
  );
  const allPostsData = await apiResponse.json();
  return allPostsData.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });
};
