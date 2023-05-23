//React
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';

//Componentes
import HotelItem from './components/HotelItem';
import RoomsCard from './components/RoomsCard';

//Styles
import { Title, HotelConteiner, Fist, HotelsContainer, GenericButton, HotelDisclamerContainer } from './styles/styles';

//Hooks
import catchHotelsWithRooms from './hooks/catchHotelWithRooms';
import catchHotelsWithoutRooms from './hooks/catchHotelsWithoutRooms';
import UserTickets from './hooks/userTicket';
import { TICKET_NOT_PAID, TICKET_DOES_NOT_INCLUDE_HOTEL } from './hooks/messages.js';

export default function Hotel() {
  const token = useToken();

  const [userTicketIncludesHotel, setUserTicketIncludesHotel] = useState(true);
  const [userTicketIsPaid, setUserTicketIsPaid] = useState(false);
  const [hotelsWithoutRooms, setHotelsWithoutRooms] = useState([]);
  const [hotelsWithRooms, setHotelsWithRooms] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [roomIsReserved, setRoomIsReserved] = useState(false);

  useEffect(() => {
    catchHotelsWithoutRooms(token, setHotelsWithoutRooms);
    UserTickets(token, setUserTicketIncludesHotel, setUserTicketIsPaid);
  }, []);
  useEffect(() => {
    if (hotelsWithoutRooms.length > 0 && hotelsWithRooms.length === 0) {
      catchHotelsWithRooms(token, hotelsWithoutRooms, setHotelsWithRooms);
    }
  }, [hotelsWithoutRooms]);

  console.log(userTicketIsPaid);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <HotelConteiner>
        <Fist>{!roomIsReserved ? 'Primeiro, escolha seu hotel!' : 'Você já escolheu seu quarto:'}</Fist>
        <HotelsContainer userTicketIncludesHotel={userTicketIncludesHotel}>
          {hotelsWithRooms.length > 0 &&
            hotelsWithRooms.map((h, index) =>
              roomIsReserved ? (
                selectedHotel === h && (
                  <HotelItem
                    hotel={h}
                    key={index}
                    numero={index + 1}
                    selectedHotel={selectedHotel}
                    setSelectedHotel={setSelectedHotel}
                    setSelectedRoom={setSelectedRoom}
                    roomIsReserved={roomIsReserved}
                  />
                )
              ) : (
                <HotelItem
                  hotel={h}
                  numero={index + 1}
                  key={index}
                  selectedHotel={selectedHotel}
                  setSelectedHotel={setSelectedHotel}
                  setSelectedRoom={setSelectedRoom}
                  roomIsReserved={roomIsReserved}
                />
              )
            )}
          {!userTicketIncludesHotel && (
            <HotelDisclamerContainer>{TICKET_DOES_NOT_INCLUDE_HOTEL}</HotelDisclamerContainer>
          )}
          {!userTicketIsPaid && <HotelDisclamerContainer>{TICKET_NOT_PAID}</HotelDisclamerContainer>}
        </HotelsContainer>
        {selectedHotel && (
          <>
            <RoomsCard
              idSelectedHotel={selectedHotel.id}
              hotel={hotelsWithRooms}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              roomIsReserved={roomIsReserved}
            />
            <GenericButton
              disabled={!selectedRoom}
              margin={'20px 0 0 0'}
              onClick={() => setRoomIsReserved(!roomIsReserved)}
            >
              {roomIsReserved ? 'TROCAR DE QUARTO' : 'RESERVAR QUARTO'}
            </GenericButton>
          </>
        )}
      </HotelConteiner>
    </>
  );
}
