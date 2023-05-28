import axios from 'axios';

export default async function userTickets(token, setUserTicketIncludesActivites, setUserTicketIsPaid) {
  try {
    const { data: userTickets } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data: ticketTypes } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets/types`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const [ticketType] = ticketTypes.filter((ticket) => ticket.id === userTickets.ticketTypeId);

    if (!ticketType.includesHotel) {
      setUserTicketIncludesActivites(false);
    }
    if (userTickets.status === 'PAID') {
      setUserTicketIsPaid(true);
    }
  } catch (error) {
    console.log(error);
  }
}
