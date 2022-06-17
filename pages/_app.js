import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../component/Header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} user={currentUser} />
    </>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const { req } = ctx;
  let host =
    typeof window !== "undefined"
      ? ""
      : "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local";
  let resp = { data: { currentUser: null } };
  try {
    resp = await axios.get(`${host}/api/users/current_user/`, {
      headers: req?.headers ?? {},
    });
  } catch (e) {}
  let pageProps = (await Component.getInitialProps)
    ? Component.getInitialProps(ctx)
    : {};
  return { pageProps, ...resp.data };
};

export default AppComponent;
