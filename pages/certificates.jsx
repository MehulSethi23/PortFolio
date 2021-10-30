const CertificatesPage = () => {
  return (
    <>
      <h1>Certificates Page</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Certificates" },
  };
}

export default CertificatesPage;
