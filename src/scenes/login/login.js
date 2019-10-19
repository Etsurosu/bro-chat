import React from 'react';
import { Link } from 'react-router-dom';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';
import Button from '../../components/button';

const Login = () => (
  <ContentPage title="Connexion">
    <ContentContainer>
      <BroInput label="nickname" placeholder="nickname" />
      <BroInput label="password" placeholder="password" />
      <Button style={{ color: '#333333', fontSize: 20 }}>
        <b>Go</b>
      </Button>
      {/** do something to this ugly Link */}
      <Link
        to="/register"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          border: '2px solid #666666',
          backgroundColor: '#cccccc',
          borderRadius: 20,
          height: 35,
          width: '100%',
          maxWidth: 200,
          color: '#333333',
          fontSize: 20,
          textDecoration: 'none'
        }}
      >
        <b>Register</b>
      </Link>
    </ContentContainer>
  </ContentPage>
);

export default Login;
