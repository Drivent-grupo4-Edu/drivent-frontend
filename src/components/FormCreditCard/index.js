import React, { useEffect, useRef, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import TitleSection from '../Titles';
import { SubTitles } from '../../components/Constants/SubTitles';
import CheckGreen from '../../assets/images/checkgreen.png';

const FormCreditCard = ({ formData, setFormData, selectedTicket, selectedTicket2, allValor, allValor2, isPaid }) => {
  const { cvc, expiry, name, number } = formData;
  const [focusedField, setFocusedField] = useState('');

  const inputRefs = {
    number: useRef(null),
    name: useRef(null),
    expiry: useRef(null),
    cvc: useRef(null),
  };

  const handleInputFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  useEffect(() => {
    if (focusedField && inputRefs[focusedField].current) {
      inputRefs[focusedField].current.focus();
    }
  }, [focusedField, inputRefs]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <TitleSection title={'Pagamento'} />
      <SubTitles variant="h6">
          Ingresso escolhido
      </SubTitles>
      <BoxTicketChosen>
        <p>{selectedTicket} + {selectedTicket2}</p>
        R$ {allValor+allValor2}
      </BoxTicketChosen>
      <SubTitles variant="h6">
        Pagamento
      </SubTitles>
      {isPaid ?
        <BoxPaymentFinished>
          <BoxFinished>
            <img src={CheckGreen} alt="check-green"/>
            <BoxtextPaymentFinished>
              <p>Pagamento confirmado!</p>
              Prossiga para escolha de hospedagem e atividades
            </BoxtextPaymentFinished>
          </BoxFinished>
        </BoxPaymentFinished> :
        <FormCreditCardStyle id="PaymentForm">
          <div className="cardContainer">
            <Cards cvc={cvc} expiry={expiry} focused={focusedField} name={name} number={number} />
          </div>

          <form>
            <div className="containerNumber">
              <input
                ref={inputRefs.number}
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={onInputChange}
                onFocus={() => handleInputFocus('number')}
                maxLength={16}
                min={0}
              />

              <h1>E.g.: 49..., 51..., 36..., 37...</h1>
            </div>

            <input
              ref={inputRefs.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={onInputChange}
              onFocus={() => handleInputFocus('name')}
              maxLength={15}
              min={0}
            />

            <div className="containerDoble">
              <input
                ref={inputRefs.expiry}
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={onInputChange}
                onFocus={() => handleInputFocus('expiry')}
                maxLength={4}
                min={0}
              />
              <input
                ref={inputRefs.cvc}
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={onInputChange}
                onFocus={() => handleInputFocus('cvc')}
                maxLength={3}
                min={0}
                className="cvcInput"
              />
            </div>
          </form>
        </FormCreditCardStyle>
      }
    </>
  );
};

export default FormCreditCard;

const FormCreditCardStyle = styled.div`
  display: flex;
  @media (max-width: 910px) {
    display: grid;
    gap: 20px;
  }
  .cardContainer {
    display: grid;
    place-items: center;
  }

  form {
    padding: 10px 10px 10px 20px;
    display: grid;
    gap: 10px;
    max-width: 600px;
    input {
      width: 400px;
      @media (max-width: 910px) {
        width: 100%;
      }
    }
    h1 {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.3);
      font-size: 14px;
      margin-left: 5px;
      margin-top: 5px;
    }

    .containerDoble {
      display: flex;
      gap: 10px;
      max-width: 100%;
      input:nth-child(1) {
        width: 100%;
      }

      .cvcInput {
        max-width: 100px;
      }
    }
  }
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

const BoxPaymentFinished = styled.div`
    display: flex;
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
