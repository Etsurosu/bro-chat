import React from 'react';
import PropTypes from 'prop-types';
import ContentPageContainer from './components/content-page-container';
import ContentPageTitle from './components/content-page-title';

const ContentPage = ({ title, children }) => (
  <ContentPageContainer>
    <ContentPageTitle>{title}</ContentPageTitle>
    {children}
  </ContentPageContainer>
);

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContentPage;
