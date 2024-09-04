import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import Footer from "../components/Layout/Footer";

const Pagenotfound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">Sorry</h1>
        <h2 className="pnf-heading">This Page is under process!</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>

    </Layout>
  );
};

export default Pagenotfound;
