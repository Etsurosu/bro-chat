import React from "react";
import ContentPage from "../../components/content-page";
import ContentContainer from "../../components/content-container";
import BroInput from "../../components/bro-input";
import Button from "../../components/button";
import Label from "../../components/label";

const Auth = () => (
  <ContentPage title="Profile">
    <ContentContainer>
      <BroInput label="nickname" placeholder="nickname" />
      <BroInput label="password" placeholder="password" />
      <Button>
        <Label style={{ color: "#333333", fontSize: 20, fontWeight: "bold" }}>
          Update
        </Label>
      </Button>
    </ContentContainer>
  </ContentPage>
);

export default Auth;