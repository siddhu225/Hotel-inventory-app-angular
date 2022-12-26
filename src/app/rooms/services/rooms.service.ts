import { Injectable } from '@angular/core';
import { RoomList, photoAlbum } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomPrice: 1000,
      rating: 3.5678,
      amenities: 'AC DELUXE LUXURY',
      checkInTime: new Date(),
      roomType: 'AC DELUXE'
    },
    {
      roomNumber: 2,
      roomPrice: 1000,
      rating: 2.5678,
      amenities: 'AC DELUXE LUXURY',
      checkInTime: new Date(),
      roomType: 'AC DELUXE'
    },
    {
      roomNumber: 3,
      roomPrice: 1000,
      rating: 4.5678,
      amenities: 'AC DELUXE LUXURY',
      checkInTime: new Date(),
      roomType: 'AC DELUXE'
    },
    {
      roomNumber: 4,
      roomPrice: 1000,
      rating: 2.5678,
      amenities: 'AC DELUXE LUXURY',
      checkInTime: new Date(),
      roomType: 'AC DELUXE'
    }
  ];

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.roomList;
  }

  addRoom(room: RoomList) {
    this.roomList.push(room);
  }

  getPhotos() {
    return this.http.get<photoAlbum>('https://jsonplaceholder.typicode.com/photos', { observe: 'response' });
  }
}
