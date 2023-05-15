import styled from 'styled-components';
import TitleSection from '../Titles';
import { CardTicket } from '../CardTicket';
import { CardTicketHotel } from '../CardTicketHotel';

const Ticket = ({
  ticketType,
  setUserSelect,
  selectedTicket,
  selectedTicket2,
  setSelectedTicket,
  setSelectedTicket2,
  setMessage,
  setAllValor, 
  setAllValor2, 
  setSavedTicket,
  setSavedTicket2
}) => {
  const type = ['Presencial', 'Online'];
  const withHotel = ['Sem Hotel', 'Com Hotel'];
  return (
    <>
      <TitleSection title={'Primeiro, escolha sua modalidade de ingresso'} />
      <CardSection>
        {type.map((e) => (
          <CardTicket key={e} e={e} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} setMessage={setMessage}
            setAllValor={setAllValor} setSavedTicket={setSavedTicket}/>
        ))}
      </CardSection>
      <TitleSection title={'Ótimo! Agora escolha sua modalidade de hospedagem'} />
      {selectedTicket!== null ? <CardSection>
        {withHotel.map((e) => (
          <CardTicketHotel key={e} e={e} selectedTicket={selectedTicket2} setSelectedTicket={setSelectedTicket2} setMessage={setMessage}
            setAllValor2={setAllValor2} setSavedTicket2={setSavedTicket2}/>
        ))}
      </CardSection>: null}
    </>
  );
};

export default Ticket;

const CardSection = styled.div`
  display: flex;
`;
