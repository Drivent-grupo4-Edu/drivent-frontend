//React
import { BsPerson, BsPersonFill } from 'react-icons/bs';

//Style
import { RoomWrapper, IconContainer, IconBox } from '../styles/stylesRoom';
import profile from '../../../../assets/images/Vector.png';
import { useState } from 'react';

export default function RoomCard({ room, selectedRoom, setSelectedRoom, index, roomIsReserved }) {
  let { vaccanciesBooked, capacity } = room;
  let auxVaccanciesBooked = vaccanciesBooked;

  const roomIsFull = vaccanciesBooked >= capacity;

  const people = Array.from({ length: capacity }, (_, i) => {
    auxVaccanciesBooked--;

    return auxVaccanciesBooked + 1 > 0 ? (
      <BsPersonFill key={i} color={roomIsFull ? '' : '#000000'} size={25} />
    ) : selectedRoom === room && i === capacity - 1 ? (
      <BsPersonFill key={i} color={'#FFC0CB'} size={25} />
    ) : (
      <BsPerson key={i} size={25} />
    );
  });

  return (
    <>
      <RoomWrapper
        room={room}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        roomIsFull={room.vaccanciesBooked >= room.capacity}
        onClick={() => {
          if (!roomIsFull && !roomIsReserved) {
            selectedRoom === room ? setSelectedRoom(null) : setSelectedRoom(room);
          }
        }}
      >
        <p>{index}</p>
        <IconContainer>
          <IconBox key={room.id}>{people}</IconBox>
        </IconContainer>
      </RoomWrapper>
    </>
  );
}
