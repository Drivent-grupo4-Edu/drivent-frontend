
import styled from 'styled-components';
export const CardTicket = ({ e, selectedTicket, setSelectedTicket, setMessage, setAllValor, setSavedTicket }) => {;
  return (
    <>
      <CardTickets onClick={() => {
        setSelectedTicket(e);
        if(e === 'Presencial') {
          setAllValor(250);
          setMessage(false);
          setSavedTicket(false);
        } else {
          setMessage(true);
          setAllValor(100);
          setSavedTicket(true);
        };
      } } selectedTicket={selectedTicket} e={e}>
        {e}
        <p>R${e === 'Presencial'?250:100}</p>
      </CardTickets>
    </>
  );
};

export const CardTickets = styled.div`
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
