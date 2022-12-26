import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomNumber: 0,
    roomPrice: 0,
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    rating: 0,
  };

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
  }

  addRoom() {
    this.roomService.addRoom(this.room);
  }

}
