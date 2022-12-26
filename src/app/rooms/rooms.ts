export interface Room{
  availableRooms: number,
  bookedRooms: number,
  totalRooms: number
}

export interface RoomList {
  roomNumber: number,
  amenities: string,
  rating: number,
  roomType: string,
  roomPrice: number,
  checkInTime: Date
}

export interface photoAlbum {
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  // "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}