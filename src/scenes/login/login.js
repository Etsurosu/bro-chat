import React from "react";
import ContentPage from "../../components/content-page";
import LoginContainer from "./components/login-container";
import BroInput from "../../components/bro-input";
import Button from "../../components/button";
import Label from "../../components/label";

const Login = () => (
  <ContentPage title="Connexion">
    <LoginContainer>
      <BroInput label="mail" placeholder="mail" />
      <BroInput label="password" placeholder="password" />
      <Button>
        <Label style={{ color: "#333333", fontSize: 20, fontWeight: "bold" }}>
          Go
        </Label>
      </Button>
    </LoginContainer>
  </ContentPage>
);

export default Login;
