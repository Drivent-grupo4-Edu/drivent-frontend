import { BsBoxArrowLeft, BsCheckCircle } from 'react-icons/bs';
import { FaRegTimesCircle } from 'react-icons/fa';

import styled from 'styled-components';

export default function ActivityButton(icon, empty) {
  const options = {
    free: (
      <>
        <BsBoxArrowLeft/> 
        <p>{empty} vagas</p>
      </>),
    registered: (
      <>
        <BsCheckCircle/> 
        <p>Inscrito</p>
      </>),
    esgoted: (
      <>
        <FaRegTimesCircle/> 
        <p>Esgotado</p>
      </>)
  };

  return(
    <ActivityButtonStyle icon={icon}>
      {options[icon]}
    </ActivityButtonStyle>
  );
}

const ActivityButtonStyle = styled.div`
    display: column;
    color: ${({ icon }) => icon === 'esgoted' ? '#CC6666' : '#078632'};
    text-align: center;
`;
