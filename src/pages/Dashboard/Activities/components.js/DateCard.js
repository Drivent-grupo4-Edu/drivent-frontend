import { useEffect, useState } from 'react';

import { DateActivite } from '../styles/stylesDate';

export default function DateCard(props) {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [weekDay, setWeekDay] = useState(null);

  useEffect(() => {
    setDay(props.data.weekDay);
    setMonth(props.data.month);
    setWeekDay(props.data.monthDay+1);
  }, []);
  function openDate() {
    props.setActiviteId(props.data.id);
    console.log('dataid:', props.data.id);
    console.log(props.data);
  }
  return (
    <>
      <DateActivite onClick={openDate}>
        {day},{weekDay}/{month}
      </DateActivite>
    </>
  );
}
