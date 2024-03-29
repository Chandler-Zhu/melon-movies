import Head from 'next/head';

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicon.svg"
        sizes="any"
      ></link>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Melon Movies',
  keywords: 'movie app, popular movies',
  description: 'watch movie for free',
};

export default Meta;
