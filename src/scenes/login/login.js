import React from 'react';
import { Link } from 'react-router-dom';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';
import Button from '../../components/button';
import Label from '../../components/label';

const Login = () => (
  <ContentPage title="Connexion">
    <ContentContainer>
      <BroInput label="nickname" placeholder="nickname" />
      <BroInput label="password" placeholder="password" />
      <Button>
        <Label style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>Go</Label>
      </Button>
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
          fontWeight: 'bold',
          color: '#333333',
          fontSize: 20,
          textDecoration: 'none'
        }}
      >
        Register
      </Link>
    </ContentContainer>
  </ContentPage>
);

export default Login;
