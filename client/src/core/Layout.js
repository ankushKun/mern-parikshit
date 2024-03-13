import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div
      className="jumbotron mt-5"
      style={{
        display: "flex",
        gap: "50px",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{title}</h2> <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
