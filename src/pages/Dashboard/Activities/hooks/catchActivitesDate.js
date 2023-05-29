import axios from 'axios';

export default async function catchActivitesDate(token, setActivitesDate) {
  try {
    const { data: activitesDate } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/activities/date`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setActivitesDate(activitesDate);
  } catch (error) {
    console.log(error);
  }
}
