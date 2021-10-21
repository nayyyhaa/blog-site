import Head from 'next/head';
import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { postIds } from "../index";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await postIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  //const postData = getPostData(params.id);
  const apiData = await fetch(`https://dev.to/api/articles/${params.id}`);
  const postData = await apiData.json();
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.published_at} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.body_html }}></div>
    </Layout>
  );
}
