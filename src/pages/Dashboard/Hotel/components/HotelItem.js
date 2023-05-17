//React
import { useState } from 'react';

//Hooks
import calculateHotelVacancies from '../hooks/Vacancies';
import getRoomsDescription from '../hooks/RoomDescription';

//Styles
import { HotelWrapper, HotelImage, HotelName, HotelSubtitleSection } from '../styles/styles.js';

export default function Hotel({ hotel, selectedHotel, setSelectedHotel, setSelectedRoom, roomIsReserved }) {
  const [hotelVacancies, setHotelVacancies] = useState(null);
  const [roomsDescription, setRoomsDescription] = useState(null);

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
        <HotelName>{hotel?.name || 'hotel'}</HotelName>
        <HotelSubtitleSection>
          <p>Tipos de acomodação:</p>
          <p>Single e Double</p>
        </HotelSubtitleSection>
        <HotelSubtitleSection>
          <p>Vagas disponíveis:</p>
          <p>103</p>
        </HotelSubtitleSection>
      </HotelWrapper>
    </>
  );
}
