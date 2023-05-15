import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import FormCreditCard from '../../../components/FormCreditCard';
import Ticket from '../../../components/Ticket';
import useToken from '../../../hooks/useToken';
import { ticketTypeService } from '../../../services/ticketApi';

export default function Payment() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedTicket2, setSelectedTicket2] = useState(null);
  const [ticketType, setTicketType] = useState([]);
  const [userSelect, setUserSelect] = useState(undefined);
  const [savedTicket, setSavedTicket] = useState('');
  const [savedTicket2, setSavedTicket2] = useState('');
  const [message, setMessage] = useState(false);
  const [allValor, setAllValor] = useState(0);
  const [allValor2, setAllValor2] = useState(0);
  let finishValor = allValor + allValor2;

  const token = useToken();
  useEffect(async() => {
    try {
      const arrTicketType = await ticketTypeService(token);
      setTicketType(arrTicketType);
    } catch (error) {}
  }, []);

  const [formData, setFormData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <AreaTitle>Ingresso e pagamento</AreaTitle>
      <TicketView>
        <Ticket
          ticketType={ticketType}
          setTicketType={setTicketType}
          userSelect={userSelect}
          setUserSelect={setUserSelect}
          selectedTicket={selectedTicket}
          selectedTicket2={selectedTicket2}
          setSelectedTicket={setSelectedTicket}
          setSelectedTicket2={setSelectedTicket2}
          setMessage={setMessage}
          setAllValor={setAllValor} 
          setAllValor2={setAllValor2}
          setSavedTicket={setSavedTicket}
          setSavedTicket2={setSavedTicket2}
        />
        {userSelect ? <FormCreditCard formData={formData} setFormData={setFormData} /> : null}
        <TotalPayable variable={message === true?'block':'none'}>
          Fechado! O total ficou em R$ {finishValor}. Agora é só confirmar:
        </TotalPayable>

        {selectedTicket !== null && selectedTicket2 !== null ? (
          <GenericButton onClick={() => {

          }}>
        RESERVAR INGRESSO
          </GenericButton>
        ) : null}
      </TicketView>
    </>
  );
}

const TicketView = styled.div`
      display: block;
`;

const ConfirmPayment = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
  }
  margin-bottom: 17px;
`;

const TotalPayable = styled.div`
    display: ${props => props.variable};
    color: #8E8E8E;
`;

const AreaTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 37px;
`;

const AreaSubTitle = styled.h3`
  font-size: 1.2rem;
  margin: ${(props) => props.margin || '0'};
  color: var(--font-gray);
`;

const GenericButton = styled.button`
  width: 182px;
  height: 37px;
  margin: ${(props) => props.margin || '0'};
  background: var(--button-proceed);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
`;
