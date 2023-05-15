import { useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelItem from '../../../components/HotelItem';
import hotelList from '../../../components/mockdata';
import Profile from '../../../assets/images/Vector.png';

export default function Hotel() {
  const [Pagamento, setPagamento] = useState(true);
  const [withoutAcc, setAcc] = useState(false);
  const [HotelChoose, setHotel] = useState(false);
  const [ButtonClicked, setButton] = useState(0);
  const [HotelCliked, setHotelClick] = useState(false);
  const [Rooms, setRooms] = useState(hotelList[ButtonClicked].Acomodation);

  console.log(Rooms);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {!HotelChoose && (
        <HotelConteiner>
          <Fist>Primeiro, escolha seu hotel</Fist>
          <HotelsContainer>
            {hotelList.map((h, index) => (
              <HotelItem
                image={h.image}
                name={h.name}
                type={h.AcomodationType}
                acomodationLenght={h.acomodationLenght}
                acomodation={h.Acomodation}
                id={h.id}
                index={index}
                setButton={setButton}
                setHotelClick={setHotelClick}
              ></HotelItem>
            ))}
          </HotelsContainer>
          <Second on={HotelCliked}>Ótima pedida! Agora escolha seu quarto:</Second>
          <RoomGrid on={HotelCliked}>
            {hotelList[ButtonClicked].Acomodation.map((r, i) => (
              <Room>
                <p>{i + 1}</p>
                {r.Type === 1 ? (
                  <img src={Profile} alt="profileicon" />
                ) : (
                  <div>
                    <img src={Profile} alt="profileicon" />
                    <img src={Profile} alt="profileicon" />
                  </div>
                )}
              </Room>
            ))}
          </RoomGrid>
        </HotelConteiner>
      )}
      {withoutAcc && (
        <HotelDisclamerContainer>
          <Disclamer>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</Disclamer>
        </HotelDisclamerContainer>
      )}
      {!Pagamento && (
        <HotelDisclamerContainer>
          <Disclamer>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Disclamer>
        </HotelDisclamerContainer>
      )}
    </>
  );
}

const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
`;

const HotelDisclamerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 870px;
  height: 580px;
`;

const HotelConteiner = styled.div`
  margin-top: 50px;
  width: 870px;
  height: 510px;
`;

const Fist = styled.p`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;

const HotelsContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 870px;
`;

const Disclamer = styled.p`
  width: 411px;
  height: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

const RoomGrid = styled.div`
  display: ${(props) => (props.on ? 'grid' : 'none')};
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Second = styled.p`
  display: ${(props) => (props.on ? 'flex' : 'none')};
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;

const Room = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
`;
