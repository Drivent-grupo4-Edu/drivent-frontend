//React
import useToken from '../../../hooks/useToken';
import { useEffect, useState } from 'react';

//Styles
import { Title, HotelDisclamerContainer, Fist, Grid } from './styles/styles';

//Components
import DateCard from './components.js/DateCard';

//Hooks
import userTickets from './hooks/userTicket';
import catchActivites from './hooks/catchActivites';
import catchActivitesDate from './hooks/catchActivitesDate';
import { WITHOUT_ACTIVITE, WITHOUT_PAYMENT } from './hooks/messages';
import { ActivitiesComponent } from './components/ActivitiesList';

export default function Activities() {
  const token = useToken();
  const [userTicketIncludesActivites, setUserTicketIncludesActivites] = useState(true);
  const [userTicketIsPaid, setUserTicketIsPaid] = useState(false);
  const [Activities, setActivites] = useState([]);
  const [ActivitiesDate, setActivitesDate] = useState([]);
  const [ActivitieId, setActiviteId] = useState(null);

  useEffect(() => {
    userTickets(token, setUserTicketIncludesActivites, setUserTicketIsPaid);
    catchActivites(token, setActivites);
    catchActivitesDate(token, setActivitesDate);
  }, []);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {!userTicketIsPaid && Activities === [] && <HotelDisclamerContainer>{WITHOUT_PAYMENT}</HotelDisclamerContainer>}
      {!userTicketIncludesActivites && Activities === [] && <HotelDisclamerContainer>
        {WITHOUT_ACTIVITE}
      </HotelDisclamerContainer>}
      <Fist>Primeiro,filtre pelo dia do evento:</Fist>
      <Grid>
        {ActivitiesDate.map((a, index) => (
          <DateCard data={a} key={index} setActiviteId={setActiviteId}/>
        ))}
      </Grid>
    </>
  );
}
