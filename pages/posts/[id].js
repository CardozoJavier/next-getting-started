import Head from 'next/head';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import Layout from '../../components/layout'
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { headingXl, lightText } from '../../styles/utils.module.scss';

const Post = ({ postData }) => {
  const { title, id, date, contentHtml } = postData || {};
  const router = useRouter();
  const { isFallback } = router;

  if (isFallback) {
    return <p>Loading ... </p>;
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <br />
      <h1 className={headingXl}>
        {title}
      </h1>
      <br />
      <div className={lightText}>
        <Date dateString={date} />
      </div>
      <br />
      {parse(contentHtml)}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    }
  };
};

export default Post;
