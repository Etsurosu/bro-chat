import React from 'react';
import { useTranslation } from 'react-i18next';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';

const Register = () => {
  const { t } = useTranslation();

  return (
    <ContentPage title={t('register.title')}>
      <ContentContainer>
        <BroInput label={t('register.username')} placeholder={t('register.username')} />
        <BroInput label={t('register.password')} placeholder={t('register.password')} />
        <ClickableIcon
          icon={faUserCheck}
          color="#cccccc"
          size="3x"
          onClick={() => console.log('registerRequest')}
        />
      </ContentContainer>
    </ContentPage>
  );
};
export default Register;
