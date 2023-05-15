import { useEffect } from 'react';
import styled from 'styled-components';

export const CardTicketHotel = ({ e, selectedTicket, setSelectedTicket, setMessage, setAllValor2, setSavedTicket2 }) => {
  useEffect(() => {
    
  });

  return(
    <>
      <CardTicketsHotel onClick={() => { 
        setSelectedTicket(e); 
        if(e === 'Sem Hotel') {
          setMessage(true);
          setAllValor2(0);
          setSavedTicket2(false);
        } else {
          setMessage(true);
          setAllValor2(350);
          setSavedTicket2(true);
        }
      }} selectedTicket={selectedTicket} e={e}>
        {e}
        <p>+R${e === 'Sem Hotel'?0:350}</p>
      </CardTicketsHotel>
    </>
  );
};

export const CardTicketsHotel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 145px;
  background-color: ${(props) => (props.selectedTicket === props.e ? '#FFEED2' : '#FFFFFF')};
  border: 1px solid gray;
  border-radius: 20px;
  margin: 0 24px 44px 0;
  p{
    color: black;
  }
`;
