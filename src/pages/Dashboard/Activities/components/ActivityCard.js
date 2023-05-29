import styled from 'styled-components';
import dayjs from 'dayjs';
import ActivityButton from './ActivityButton';

const ActivityCard = ({ activity }) => {
  const hours = dayjs(activity.finalHour).diff(dayjs(activity.inicialHour), 'hour');
  const height = hours > 1 ? ((80 * hours) + (10 * (hours-1))) :80;
  const available = activity.vacancies - activity.filled; //colocar filled e registered no back/banco

  console.log(hours);
  return(
    <Card height={height} registered={activity.registered}>  
      <div>
        <h3>{activity.name}</h3>
        <p>{`${dayjs(activity.inicialHour).format('HH:mm')} - ${dayjs(activity.finalHour).format('HH:mm')}`}</p>
      </div>
      <div>
        {activity.registered ? (
          <ActivityButton icon={'registered'}/>
        ) : (
          available > 0 ? (
            <ActivityButton icon={'free'} empty={available}/>
          ) : (
            <ActivityButton icon={'esgoted'}/>
          )
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
    display:flex;    
    height: ${props => props.height}px;
    background: ${props => props.registered ? '#D0FFDB' : '#F1F1F1'};
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;

    >div:first-child {
        display: flex;
        align-itens: flex-start;
        height: 100%;
        flex-direction: column;

        >h3 {
            font-size: 12px;
            font-weight: 700;
            color: #343434;
            width: 100%;
            margin-bottom: 6px;
        }

        >p {
            font-size: 12px;
            font-weight: 400;
            color: #343434;
            width: 100%;
        }
    }

    >div:last-child {
        display: flex;
        align-itens: flex-start;
        justify-content: center;
        height: 100%;
        width: 54px;
        padding-left: 12px;
        border-left: 1px solid ${props => props.rsgistered ? '#99E8A1' : '#CFCFCF'};
    }   
`;

export default ActivityCard;
