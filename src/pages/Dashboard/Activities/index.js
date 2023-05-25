//React
import useToken from '../../../hooks/useToken';
import { useEffect, useState } from 'react';

//Styles
import { Title, HotelDisclamerContainer } from './styles/styles';

//Hooks
import userTickets from './hooks/userTicket';
import { WITHOUT_ACTIVITE, WITHOUT_PAYMENT } from './hooks/messages';

export default function Activities() {
  const token = useToken();
  const [userTicketIncludesActivites, setUserTicketIncludesActivites] = useState(true);
  const [userTicketIsPaid, setUserTicketIsPaid] = useState(false);

  useEffect(() => {
    userTickets(token, setUserTicketIncludesActivites, setUserTicketIsPaid);
  }, []);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {/* <HotelDisclamerContainer>{WITHOUT_PAYMENT}</HotelDisclamerContainer> */}
      {/* <HotelDisclamerContainer>
        {WITHOUT_ACTIVITE}
      </HotelDisclamerContainer> */}
      
    </>
  );
}
