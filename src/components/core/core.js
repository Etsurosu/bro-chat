import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import CoreContainer from "./components/core-container";
import Header from "./components/header";
import Body from "./components/body";

const Core = ({ children }) => (
  <CoreContainer>
    <Header>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#e8e8e8",
          height: 100
        }}
      >
        BROCHAT
      </Link>
      <Link to="/me" style={{ height: 100 }}>
        <FontAwesomeIcon icon={faUserAlt} color="#e8e8e8" size="3x" />
      </Link>
      <Link
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          height: 100,
          bottom: 0
        }}
        to="/settings"
      >
        <FontAwesomeIcon icon={faCog} color="#e8e8e8" size="3x" />
      </Link>
    </Header>
    <Body>{children}</Body>
  </CoreContainer>
);

export default Core;
