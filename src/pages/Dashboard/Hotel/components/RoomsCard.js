//Hooks
import { AreaSubTitle, AreaTitle, Room } from '../styles/stylesRoom';

//components
import RoomCard from './RoomCard';

//Styles
import { RoomGrid } from '../styles/stylesRoom';

export default function RoomsCard({ idSelectedHotel, hotel, selectedRoom, setSelectedRoom, roomIsReserved }) {
  const filteredHotelsArray = hotel.filter((hotel) => hotel.id === idSelectedHotel);

  return (
    <>
      <AreaTitle margin={'0 0 30px 0'}></AreaTitle>
      {!roomIsReserved && <AreaSubTitle>Ótima pedida! Agora escolha seu quarto:</AreaSubTitle>}
      <RoomGrid roomIsReserved={roomIsReserved}>
        {filteredHotelsArray[0].Rooms.map((room, i) =>
          roomIsReserved ? (
            selectedRoom === room && (
              <RoomCard
                key={i}
                room={room}
                index={i + 1}
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
                roomIsReserved={roomIsReserved}
              />
            )
          ) : (
            <RoomCard
              key={i * 2}
              room={room}
              index={i + 1}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              roomIsReserved={roomIsReserved}
            />
          )
        )}
      </RoomGrid>
    </>
  );
}
