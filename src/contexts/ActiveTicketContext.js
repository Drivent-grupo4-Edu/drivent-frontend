import { useState } from 'react';
import { createContext } from 'react';

const ActiveTicketContext = createContext();
export default ActiveTicketContext;

export function ActiveTicketProvider({ children }) {
  const [activeTicket, setActiveTicket] = useState(false);

  return <ActiveTicketContext.Provider value={{ activeTicket, setActiveTicket }}>{ children }</ActiveTicketContext.Provider>;
}
