import styled from 'styled-components';
import { Titles } from '../Constants/Titles';
import { SubTitles } from '../Constants/SubTitles';
import { Buttons } from '../Constants/Buttons';
import CheckGreen from '../../assets/images/checkgreen.png';
import PaymentForm from '../PaymentForm';
import React, { createContext, useState } from 'react';
import { UserProvider } from '../../contexts/UserContext';


export default function TicketsPaymentsForm() {
  const { isEnrolled } = useContext(UserProvider);

  if (!isEnrolled) {
    return (
      <>
      <Titles variant="h4">
                Ingresso e pagamento
      </Titles>
      <BoxNotEnroll>
        <BoxTextNotEnroll>
          <p>Você precisa completar sua inscrição antes</p>
          <p>de prosseguir para a escolha de ingresso</p>
        </BoxTextNotEnroll>
      </BoxNotEnroll>
      </>
    );
  }
  
  return (
    <>
      <Titles variant="h4">
                Ingresso e pagamento
      </Titles>
      <BoxModel>
        <SubTitles variant="h6">
                Primeiro, escolha sua modalidade de ingresso
        </SubTitles>
        <BoxModelinsTickets>
          <BoxInPerson>
            <p>Presencial</p>
              R$ 250
          </BoxInPerson>
          <BoxOnline>
            <p>Online</p>
             R$ 100
          </BoxOnline>
        </BoxModelinsTickets>
        <SubTitles variant="h6">
            Ótimo! Agora escolha sua modalidade de hospedagem
        </SubTitles>
        <BoxModelinsAccommodations>
          <BoxNotHotel>
            <p>Sem Hotel</p>
            + R$ 0
          </BoxNotHotel>
          <BoxHotel>
            <p>Com Hotel</p>
            + R$ 350
          </BoxHotel>
        </BoxModelinsAccommodations>
        <SubTitles variant="h6">
            Fechado! O total ficou em R$ 600. Agora é só confirmar:
        </SubTitles>
        <Buttons>RESERVAR INGRESSO</Buttons>
      </BoxModel>
      <BoxPayment>
        <SubTitles variant="h6">
        Ingresso escolhido
        </SubTitles>
        <BoxTicketChosen>
          <p>Presencial + Com Hotel</p>
          R$ 600
        </BoxTicketChosen>
        <SubTitles variant="h6">
        Pagamento
        </SubTitles>
        <BoxPaymentProgress>
          <PaymentForm/>
        </BoxPaymentProgress>
        <BoxPaymentFinished>
          <BoxFinished>
            <img src={CheckGreen} alt="check-green"/>
            <BoxtextPaymentFinished>
              <p>Pagamento confirmado!</p>
              Prossiga para escolha de hospedagem e atividades
            </BoxtextPaymentFinished>
          </BoxFinished>
        </BoxPaymentFinished>
      </BoxPayment>
    </>
  );
}

const BoxPaymentProgress = styled.div`
        display: none;
`;

const BoxPaymentFinished = styled.div`
    display: none;
    img{
        margin-right: 10px;
    }
`;

const BoxFinished = styled.div`
    display: flex;
`;

const BoxtextPaymentFinished = styled.div`
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    color: #454545;
    p{
    font-weight: bold;
    }
`;

const BoxPayment = styled.div`
    display: block;
`;

const BoxNotEnroll = styled.div`
    display: none;
`;

const BoxTicketChosen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 290px;
    height:108px;
    background-color: #FFEED2;
    border-radius: 10px;
    color: #898989;
    margin-bottom: 30px;
    p{
        color: #454545;
    }
`;

const BoxTextNotEnroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25%;
    p{
        color: #8E8E8E;
        font-size: 20px;
        font-family: 'Roboto';
        font-weight: 400;
    }
`;

const BoxModelinTicketsAccommodations = styled.div`
    display: block;
`;

const BoxInPerson = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px!important;
    width: 145px;
    height: 145px;
    border: 2px solid #CECECE;
    border-radius: 10px;
    background-color: white;
    color: #898989;
    p{
        color: #454545;
    };
`;

const BoxOnline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px!important;
    width: 145px;
    height: 145px;
    border: 2px solid #CECECE;
    border-radius: 10px;
    background-color: white;
    margin-left: 24px;
    color: #898989;
    p{
        color: #454545;
    };
`;

const BoxModelinsTickets = styled.div`
    display: flex;
    margin-top: 44px;
`;

const BoxModelinsAccommodations = styled.div`
    display: flex;
`;

const BoxNotHotel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px!important;
    width: 145px;
    height: 145px;
    border: 2px solid #CECECE;
    border-radius: 10px;
    background-color: white;
    color: #898989;
    p{
        color: #454545;
    };
`;

const BoxHotel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px!important;
    width: 145px;
    height: 145px;
    border: 2px solid #CECECE;
    border-radius: 10px;
    background-color: white;
    color: #898989;
    p{
        color: #454545;
    };
    margin-left: 24px;
`;
