import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import FormCreditCard from '../../../components/FormCreditCard';
import Ticket from '../../../components/Ticket';
import useToken from '../../../hooks/useToken';
import { ticketTypeService } from '../../../services/ticketApi';
import useTicket from '../../../hooks/api/useTicket';
import useSavePayment from '../../../hooks/api/useSavePayment';
import { toast } from 'react-toastify';
import axios from 'axios';

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
  const [ isPaid, setIsPaid ] = useState(false);
  const { savePayment } = useSavePayment();
  const [ticketView, setTicketView] = useState('block');
  const { ticket } = useTicket();
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

  async function submitPayment() {
    const newPayment = {
      ticketId: ticket.id,
      cardData: { 
        number: formData.number,
        issuer: formData.name
      }
    };
    try {
      if(isPaid === false) {
        await savePayment(newPayment);
        toast('Pagamento realizado com sucesso!');
        setIsPaid(true);
        ticket.status = 'PAID';
      } else {
        toast('Este ingresso já foi pago');
      }
    } catch(error) {
      toast('Não foi possível efetuar o pagamento!');
    }
  }

  function finishedPayment() {
    if(!formData.name || !formData.number || !formData.expiry || !formData.cvc) {
      toast('Insira as informações do cartão');
    } else {
      submitPayment();
    }
  }

  return (
    <>
      <AreaTitle>Ingresso e pagamento</AreaTitle>
      <TicketView ticketView={ticketView === 'block'? 'block': 'none'}>
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
          allValor={allValor}
          setAllValor={setAllValor} 
          allValor2={allValor2}
          setAllValor2={setAllValor2}
          savedTicket={savedTicket}
          setSavedTicket={setSavedTicket}
          savedTicket2={savedTicket2}
          setSavedTicket2={setSavedTicket2}
        />
        <TotalPayable variable={message === true?'block':'none'}>
          Fechado! O total ficou em R$ {finishValor}. Agora é só confirmar:
        </TotalPayable>
      </TicketView>
      {userSelect ? 
        <FormCreditCard 
          formData={formData} 
          setFormData={setFormData} 
          selectedTicket={selectedTicket} 
          selectedTicket2={selectedTicket2}
          allValor={allValor}
          allValor2={allValor2}
        /> : null}
      
      {selectedTicket !== null && selectedTicket2 !== null ? (
        <GenericButton onClick={userSelect ? finishedPayment : async(e) => {
          e.preventDefault();

          let ticketTypeId = 0;

          switch (true) {
          case (savedTicket === false && savedTicket2 === true):
            ticketTypeId = 1;
            break;
          case (savedTicket === false && savedTicket2 === false):
            ticketTypeId = 2;
            break;
          case (savedTicket === true && savedTicket2 === false):
            ticketTypeId = 3;
            break;
          default:
            break;
          }

          const body = { ticketTypeId: ticketTypeId };

          await axios.post(`${process.env.REACT_APP_API_BASE_URL}/tickets`, body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(() => {    
            ticket.status = 'RESERVED';
            setTicketView('none');    
            setUserSelect(true);
          }).catch((err) => {
            console.log(err);
            alert(err.response.data.mensagem);
          });
        }}>
            
          {userSelect ? 'FINALIZAR PAGAMENTO' : 'RESERVAR INGRESSO'}
        </GenericButton>
      ) : null}
    </>
  );
}

const TicketView = styled.div`
      display: ${props => props.ticketView};
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
