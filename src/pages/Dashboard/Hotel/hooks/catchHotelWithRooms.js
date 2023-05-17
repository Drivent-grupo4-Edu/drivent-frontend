import catchHotelRooms from './catchHotelRooms';
import catchRoomsBooked from './catchRoomsBooked';

export default async function catchHotelsWithRooms(token, hotelsWithoutRooms, setHotelsWithRooms) {
  const hotelsWithRooms = [];

  for (let i = 0; i < hotelsWithoutRooms.length; i++) {
    let hotelWithRooms = await catchHotelRooms(token, hotelsWithoutRooms[i].id);
    const roomIdsBooked = await catchRoomsBooked(token, hotelsWithoutRooms[i].id);

    hotelWithRooms.Rooms = hotelWithRooms.Rooms.map((room) => {
      if (roomIdsBooked.includes(room.id)) {
        !room.vaccanciesBooked ? (room.vaccanciesBooked = 1) : room.vaccanciesBooked++;
      } else {
        room.vaccanciesBooked = 0;
      }
      return room;
    });
    hotelsWithRooms.push(hotelWithRooms);
  }
  setHotelsWithRooms(hotelsWithRooms);
}
