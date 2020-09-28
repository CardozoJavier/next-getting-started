import Link from 'next/link'
import Head from 'next/head'
import {
  container,
  header,
  headerImage,
  backToHome,
  headerHomeImage,
} from './styles/layout.module.scss';
import utilStyles from '../styles/utils.module.scss'

const name = 'Javi Cardozo';
export const siteTitle = 'Next.js Sample Website';

/**
 * Home page component
 */
const renderHome = () => (
  <>
    <img
      src="/images/profile.jpg"
      className={`${headerHomeImage} ${utilStyles.borderCircle}`}
      alt={name}
    />
    <h1 className={utilStyles.heading2Xl}>{name}</h1>
  </>
);

/**
 * Profile page component
 */
const renderProfile = () => (
  <>
    <Link href="/">
      <a>
        <img
          src="/images/profile.jpg"
          className={`${headerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
      </a>
    </Link>
    <h2 className={utilStyles.headingLg}>
      <Link href="/">
        <a className={utilStyles.colorInherit}>{name}</a>
      </Link>
    </h2>
  </>
);

/**
 * Back page component
 */
const renderBack = () => (
  <div className={backToHome}>
    <Link href="/">
      <a>← Back to home</a>
    </Link>
  </div>
);

const Layout = ({ children, home }) => (
  <div className={container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={header}>
      {home ? renderHome() : renderProfile()}
    </header>
    <main>{children}</main>
    {!home && renderBack()}
  </div>
);

export default Layout;
