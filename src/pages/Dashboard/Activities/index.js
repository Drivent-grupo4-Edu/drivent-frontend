//React
import useToken from '../../../hooks/useToken';
import { useEffect, useState } from 'react';

//Styles
import { Title, HotelDisclamerContainer } from './styles/styles';

//Hooks
import userTickets from './hooks/userTicket';
import { WITHOUT_ACTIVITE, WITHOUT_PAYMENT } from './hooks/messages';
import { ActivitiesComponent } from './components/ActivitiesList';

export default function Activities() {
  const token = useToken();
  const [userTicketIncludesActivites, setUserTicketIncludesActivites] = useState(true);
  const [userTicketIsPaid, setUserTicketIsPaid] = useState(false);

  useEffect(() => {
    userTickets(token, setUserTicketIncludesActivites, setUserTicketIsPaid);
  }, []);

  return (
    <>
      <Title>Escolha de atividades</Title>
      {!userTicketIsPaid || !userTicketIncludesActivites ? ( 
        <HotelDisclamerContainer>
          {!userTicketIsPaid? WITHOUT_PAYMENT: WITHOUT_ACTIVITE}
        </HotelDisclamerContainer>
      ): ActivitiesComponent};

    </>
  );
}
