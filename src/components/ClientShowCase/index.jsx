import React from "react";
import { Link } from "react-router-dom";

export default ({ title, logo }) => {
  return (
    <Link
      to={"/"}
      title={title}
      className="inline-flex flex-shrink-0 w-32 md:w-48 h-16"
    >
      <img src={logo} alt={title + " Logo"} />
    </Link>
  );
};
