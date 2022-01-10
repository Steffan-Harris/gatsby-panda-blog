import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Homepage = () => {
  return (
    <Layout pageTitle="Home">
      <p>How are you today?</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        alt="Baby pandas"
      />
      <StaticImage src="../images/red-panda.jpg" alt="Red panda" />
    </Layout>
  );
};

export default Homepage;
