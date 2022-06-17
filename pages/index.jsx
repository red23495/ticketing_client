const HomePage = ({ user }) => {
  return <h1>Welcome {user && user.email}</h1>;
};

HomePage.getInitialProps = async (ctx) => ({ props: {} });

export default HomePage;
