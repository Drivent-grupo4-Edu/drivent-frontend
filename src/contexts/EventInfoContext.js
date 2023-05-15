import { createContext } from 'react';

import Splash from '../components/Splash';

import useEvent from '../hooks/api/useEvent';
import { useState } from 'react';

const EventInfoContext = createContext();
export default EventInfoContext;

export function EventInfoProvider({ children }) {
  const { event, eventLoading, eventError } = useEvent();
  const [HotelClicked, setHotelClicked] = useState(99999);

  if (eventLoading) {
    return <Splash loading />;
  }

  if (eventError) {
    let message = eventError.response
      ? eventError.response.data.message
      : 'Could not connect to server. Please try again later.';
    return <Splash message={message} />;
  }

  return (
    <EventInfoContext.Provider value={{ eventInfo: event, eventInfoError: eventError, HotelClicked, setHotelClicked }}>
      {children}
    </EventInfoContext.Provider>
  );
}
