import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityCard from './ActivityCard';

export function ActivitiesComponent() {
  const [Activities, setActivities] = useEffect([]);

  //localID: mainAudithorium = 1, sideAudithorium = 2, workshop = 3 

  const activity1 = {
    id: 1,
    activity_name: 'Minecraft: Montando o PC ideal',
    vacancies: 16,
    soldOff: false,
    inicialHour: '2023-05-29T12:00:00.901Z',
    finalHour: '2023-05-29T13:30:00.901Z',
    createdAt: '2023-05-29T11:26:28.904Z',
    updatedAt: '2023-05-29T11:26:28.904Z',
    localID: 1
  };
  const activity2 = {
    id: 2,
    activity_name: 'Minecraft: Montando o PC ideal',
    vacancies: 10,
    soldOff: false,
    inicialHour: '2023-05-29T12:00:00.901Z',
    finalHour: '2023-05-29T13:30:00.901Z',
    createdAt: '2023-05-29T11:26:28.904Z',
    updatedAt: '2023-05-29T11:26:28.904Z',
    localID: 2
  };
  const activity3 = {
    id: 3,
    activity_name: 'Minecraft: Montando o PC ideal',
    vacancies: 20,
    soldOff: false,
    inicialHour: '2023-05-29T12:00:00.901Z',
    finalHour: '2023-05-29T13:30:00.901Z',
    createdAt: '2023-05-29T11:26:28.904Z',
    updatedAt: '2023-05-29T11:26:28.904Z',
    localID: 3
  };

  return (
    <>
      <ContainerAudithoruins>
        <div>
          <h2>Auditório Principal</h2>
          <div>
            <ActivityCard activity={activity1} />
            <ActivityCard activity={activity1} />
          </div>
        </div>
        <div>
          <h2>Auditório Lateral</h2>
          <div className='no-border-left'>
            <ActivityCard activity={activity2} />
          </div>
        </div>
        <div>
          <h2>Sala de Workshop</h2>
          <div className='no-border-left'>
            <ActivityCard activity={activity3} />
          </div>
        </div>
      </ContainerAudithoruins>
    </>
  );
}

const ContainerAudithoruins = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 60px;
  > div {
    flex: 1;
    
    > h2 {
      font-family: 'Roboto', sans-serif;
      color: #7B7B7B;
      font-size: 17px;
      font-weight: 400;
      text-align: center;
    }
    > div {
      width: 100%;
      min-height: calc(100vh - 500px);
      border: 1px solid #D7D7D7;
      margin-top: 15px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
      &.no-border-left {
        border-left: none;
      }
    }
  }
`;
