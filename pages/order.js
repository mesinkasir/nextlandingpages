import Head from 'next/head';
import data from './data/price.json';
import Header from './widget/header';
import Footer from './widget/footer';
import Pro from './price/pro';
import Std from './price/std';

function Order() {
  return (
    <div className="container">
      <Head>
        <meta
          name="google-site-verification"
          content="Xi3WpckDbMBvm1pdlc5XukNoA9uWDmnExIiOeaTOxq0"
        />
        <title>{data.title}</title>
        <meta content={data.title} property="og:title" />
        <meta content={data.title} name="facebook:title" />
        <meta content={data.title} name="twitter:title" />
        <meta content={data.title} name="keywords" />
        <meta content={data.title} property="og:site_name" />
        <meta content={data.desc} name="description" />
        <meta content={data.desc} name="twitter:description" />
        <meta content={data.desc} name="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta
          content="https://www.youtube.com/c/bakoelraksupermarketMesinKasir"
          property="youtube:chanel"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta
          content="https://github.githubassets.com/favicons/favicon.svg"
          name="facebook:image"
        />
        <meta
          content="https://github.githubassets.com/favicons/favicon.svg"
          name="twitter:image"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://github.githubassets.com/favicons/favicon.svg"
        />
        <meta content="Mesin Kasir" property="og:author" />
        <meta content="website" property="og:type" />
        <meta content="index, follow" name="robots" />
      </Head>

      <main className="row">
        <Header />
        <Std />
        <Pro />
      </main>
      <Footer />
    </div>
  );
}

export default Order;
