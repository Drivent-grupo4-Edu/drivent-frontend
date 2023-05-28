import { Title, HotelDisclamerContainer } from './styles/styles';
import { WITHOUT_PAYMENT } from './hooks/messages';
import Selo from '../../../assets/images/selo.png';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import catchUsername from './hooks/catchUserName';
import useToken from '../../../hooks/useToken';

export default function Certificate() {
  const token = useToken();

  const [username, setUsername] = useState('Fulano');
  const [haveCertificate, sethaveCertificate] = useState(true);

  useEffect(() => {
    catchUsername(token, sethaveCertificate, setUsername);
  }, []);

  return (
    <>
      <Title>Certificado!</Title>
      {haveCertificate ? (
        <ConteinerCertificado>
          <MainTitle>CERTIFICADO DE CONCLUSÃO</MainTitle>
          <SubTitle>CONCEDIDO A</SubTitle>
          <UserName>{username}</UserName>
          <LowTittle>PARA CERTIFICAR QUE AS ATIVIDADES E A IDA AO EVENTO FOI CONCLUIDA</LowTittle>
          <img src={Selo} alt="selo" width="260" height="260" />
        </ConteinerCertificado>
      ) : (
        <HotelDisclamerContainer>{WITHOUT_PAYMENT}</HotelDisclamerContainer>
      )}
    </>
  );
}

export const ConteinerCertificado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 870px;
  height: 580px;
`;

export const MainTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
`;

export const SubTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
`;

export const UserName = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 74px;
  line-height: 30px;
  color:purple;
`;

export const LowTittle = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
`;
