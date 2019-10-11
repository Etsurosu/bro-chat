import React from "react";
import Container from "../../components/container";

const Auth = ({ isConnected }) => (
  <>
    {(isConnected && <Container>{isConnected}</Container>) || (
      <Container>{isConnected}</Container>
    )}
  </>
);

export default Auth;
