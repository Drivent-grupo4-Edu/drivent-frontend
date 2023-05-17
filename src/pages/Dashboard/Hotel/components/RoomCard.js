//React
import { BsPerson, BsPersonFill } from 'react-icons/bs';

//Style
import { RoomWrapper, IconContainer, IconBox } from '../styles/stylesRoom';
import profile from '../../../../assets/images/Vector.png';
import { useState } from 'react';

export default function RoomCard({ room, selectedRoom, setSelectedRoom, index, roomIsReserved }) {
  //   let { vaccanciesBooked, capacity } = room;
  //   let auxVaccanciesBooked = vaccanciesBooked;

  //   const roomIsFull = vaccanciesBooked >= capacity;

  //   const people = Array.from({ length: capacity }, (_, i) => {
  //     auxVaccanciesBooked--;

  //     return auxVaccanciesBooked + 1 > 0 ? (
  //       <BsPersonFill
  //         key={i}
  //         color={
  //           Filla os usuários de acordo com os quartos que já foram reservados e/ou estão cheios
  //           roomIsFull ? '#808080' : '#000000'
  //         }
  //         size={25}
  //       />
  //     ) : selectedRoom === room && i === capacity - 1 ? (
  //       <BsPersonFill key={i} color={'#FFC0CB'} size={25} />
  //     ) : (
  //       <BsPerson key={i} size={25} />
  //     );
  //   });

  const [Allow, setAllow] = useState(false);

  function testando() {
    if (Allow === true) {
      setAllow(false);
      console.log(Allow);
    } else {
      setAllow(true);
      console.log(Allow);
    }
  }

  return (
    <>
      <RoomWrapper
        onClick={testando}
        room={room}
        allow={Allow}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        roomIsFull={room.vaccanciesBooked >= room.capacity}
      >
        <p>{index}</p>
        <IconContainer>
          <IconBox>
            {room === 1 ? (
              <img src={profile} />
            ) : (
              <>
                <img src={profile} /> <img src={profile} />
              </>
            )}
          </IconBox>
        </IconContainer>
      </RoomWrapper>
    </>
  );
}
