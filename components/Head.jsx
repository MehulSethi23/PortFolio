import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta
        name="description"
        content="Mehul Sethi is an avid full stack web developer building websites and applications you'd love to use"
      />
      <script src="/js/NotAtAllInteresting.js"></script>
      <meta
        name="keywords"
        content="Mehul, Mehul Sethi, Sethi, web developer, Mehul web developer, Mehul developer, mern stack, Mehul portfolio"
      />
      <meta property="og:title" content="Mehul Sethi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://mehul-sethi.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Mehul Sethi",
};
