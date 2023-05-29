import axios from 'axios';

export default async function catchActivites(token, setActivites) {
  try {
    const { data: activites } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/activities`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setActivites(activites);
  } catch (error) {
    console.log(error);
  }
}
