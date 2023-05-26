import axios from 'axios';

export default async function catchUsername(token, sethaveCertificate, setUsername) {
  try {
    const { data: userTickets } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data: User } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/enrollments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    sethaveCertificate(userTickets.status);
    setUsername(User.name);
    console.log(User.name);
  } catch (error) {
    console.log(error.message);
  }
}
