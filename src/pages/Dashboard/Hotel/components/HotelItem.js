//React
import { useState, useEffect } from 'react';

//Hooks
import calculateHotelVacancies from '../hooks/Vacancies';
import getRoomsDescription from '../hooks/RoomDescription';

//Styles
import { HotelWrapper, HotelImage, HotelName, HotelSubtitleSection } from '../styles/styles.js';

export default function Hotel({ hotel, selectedHotel, setSelectedHotel, setSelectedRoom, roomIsReserved, numero }) {
  const [hotelVacancies, setHotelVacancies] = useState(null);
  const [roomsDescription, setRoomsDescription] = useState(null);

  useEffect(() => {
    setHotelVacancies(calculateHotelVacancies(hotel));
    setRoomsDescription(getRoomsDescription(hotel));
  }, []);

  return (
    <>
      <HotelWrapper
        selectedHotel={selectedHotel}
        hotel={hotel}
        onClick={() => {
          if (!roomIsReserved) {
            selectedHotel === hotel ? setSelectedHotel(null) : setSelectedHotel(hotel);
            setSelectedRoom(null);
          }
        }}
      >
        <HotelImage src={hotel?.image || '#'} alt="Hotel image" />
        <HotelName>Hotel {numero}</HotelName>
        <HotelSubtitleSection>
          <p>Tipos de acomodação:</p>
          <p>{roomsDescription}</p>
        </HotelSubtitleSection>
        <HotelSubtitleSection>
          <p>Vagas disponíveis:</p>
          <p>{hotelVacancies}</p>
        </HotelSubtitleSection>
      </HotelWrapper>
    </>
  );
}
