import React from "react";
import { Link, Redirect } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="layout-center">
      <span className="border">PAGE NOT FOUND</span>
      <br />
      <br />
      <br />
      <button>
        <a style={{ textDecoration: "none" }} href="/">
          GO HOME
        </a>
      </button>
    </div>
  );
};

export default NotFoundPage;
