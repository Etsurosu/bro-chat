import React from "react";
import ContentPageContainer from "./components/content-page-container";

const ContentPage = ({ title, children }) => (
  <ContentPageContainer>
    <h1 style={{ color: "#333333" }}>{title}</h1>
    {children}
  </ContentPageContainer>
);

export default ContentPage;
