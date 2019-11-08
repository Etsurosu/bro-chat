import React from 'react';
import PropTypes from 'prop-types';
import ContentPageContainer from './components/content-page-container';
import ContentPageTitle from './components/content-page-title';
import ContentContainer from '../content-container';

const ContentPage = ({ title, children }) => (
  <ContentPageContainer>
    <ContentPageTitle>{title}</ContentPageTitle>
    <ContentContainer>{children}</ContentContainer>
  </ContentPageContainer>
);

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContentPage;
