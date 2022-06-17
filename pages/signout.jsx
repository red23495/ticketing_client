import axios from "axios";
import Router from "next/router";
import { useEffect } from "react";

const SignoutPage = () => {
  useEffect(() => {
    axios.get("/api/users/signout/").then(() => Router.push("/"));
  }, []);

  return <h3>Signing out...</h3>;
};

export default SignoutPage;
