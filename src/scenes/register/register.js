import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';
import Button from '../../components/button';
import Label from '../../components/label';

const Register = () => {
  const { t } = useTranslation();

  return (
    <ContentPage title={t('register.title')}>
      <ContentContainer>
        <BroInput label={t('register.username')} placeholder={t('register.username')} />
        <BroInput label={t('register.password')} placeholder={t('register.password')} />
        {/** do something to this Button */}
        <Button>
          <Label style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>
            {t('register.confirm')}
          </Label>
        </Button>
      </ContentContainer>
    </ContentPage>
  );
};
export default Register;
