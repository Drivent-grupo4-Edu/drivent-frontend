import axios from 'axios';

export default async function catchHotel(token, setHotels) {
  try {
    const hotelsWithoutRooms = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/hotels`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setHotels(hotelsWithoutRooms.data);
  } catch (error) {
    console.log(error.message);
  }
}

