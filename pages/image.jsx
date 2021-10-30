const ImagePage = () => {
  return (
    <>
      <h1>image Page</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Image" },
  };
}

export default ImagePage;
