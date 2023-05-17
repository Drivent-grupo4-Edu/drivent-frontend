import styled from 'styled-components';

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
`;

export const HotelDisclamerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 870px;
  height: 580px;
`;

export const HotelConteiner = styled.div`
  margin-top: 50px;
  width: 870px;
  height: 510px;
`;

export const Fist = styled.p`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;

export const HotelsContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 870px;
`;

export const Disclamer = styled.p`
  width: 411px;
  height: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

export const RoomGrid = styled.div`
  display: ${(props) => (props.on ? 'grid' : 'none')};
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Second = styled.p`
  display: ${(props) => (props.on ? 'flex' : 'none')};
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;

export const Room = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
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

//Card
export const HotelWrapper = styled.div`
  min-width: 200px;
  height: 250px;
  padding: 15px;
  background-color: ${(props) => (props.selectedHotel === props.hotel ? '#FFEED2' : '#ebebeb')};
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

export const HotelImage = styled.img`
  max-width: 100%;
  max-height: 100px;
  border-radius: 5px;
`;

export const HotelName = styled.p`
  color: var(--hotel-light-dark);
  font-size: 1.2rem;
`;

export const HotelSubtitleSection = styled.section`
  > p {
    font-size: 0.8rem;
  }
  > p:first-child {
    color: var(--hotel-strong-dark);
    font-weight: bold;
  }
  > p:last-child {
    color: var(--hotel-light-dark);
    margin-top: 5px;
  }
`;
