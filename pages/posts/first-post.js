import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    <h3>
      <Link href="http://thefabulouslifestyles.com/">
        <a className="foo" target="_blank" rel="noopener noreferrer">
          thefabulouslifestyles.com/
        </a>
      </Link>
    </h3>
  </Layout>
);
export default FirstPost;
