import { useState } from 'react';
import styled from 'styled-components';

export default function Hotel(props) {
  const [Clicked, setClicked] = useState(false);

  function changeButtonColor() {
    console.log(props.id);

    if (Clicked === false) {
      setClicked(true);
      props.setHotelClick(true);
      props.setButton(props.id);
    } else {
      setClicked(false);
      props.setButton(props.id);
    }
  }

  return (
    <>
      <HotelContainer onClick={changeButtonColor} clicked={Clicked}>
        <ImageTop src={props.image} alt="image"></ImageTop>
        <MainTittle>{props.name}</MainTittle>
        <SubTittle>Tipos de acomodação:</SubTittle>
        <TriTittle>{props.type}</TriTittle>
        <SubTittle>Vagas disponíveis:</SubTittle>
        <TriTittle>{props.acomodationLenght}</TriTittle>
      </HotelContainer>
    </>
  );
}

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  display: flex;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#ebebeb')};
`;

const ImageTop = styled.img`
  margin-left: 13px;
  margin-top: 10px;
  width: 168px;
  height: 109px;
  border-radius: 5px;
`;

const MainTittle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-left: 13px;
  color: #343434;
`;

const SubTittle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-left: 13px;
  color: #3c3c3c;
`;

const TriTittle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3c3c3c;
  margin-left: 13px;
`;
