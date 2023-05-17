import styled from 'styled-components';

//RoomCard
export const Room = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  flex-wrap: wrap;
  margin-top: ${(props) => (props.roomIsReserved ? '1rem' : '2rem')};
`;

export const AreaTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 37px;
`;

export const AreaSubTitle = styled.h3`
  font-size: 1.2rem;
  margin: ${(props) => props.margin || '0'};
  color: var(--font-gray);
`;

export const GenericButton = styled.button`
  width: 182px;
  height: 37px;
  margin: ${(props) => props.margin || '0'};
  background: var(--button-proceed);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

//Room
export const RoomWrapper = styled.button`
  width: 190px;
  height: 45px;
  border-width: medium;
  border-style: solid;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 10px;
  background-color: ${(props) => (props.allow ? '#FFC0CB' : '#FFFFFF')};
  cursor: pointer;

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const IconBox = styled.div``;

export const RoomGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const RoomItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
`;
