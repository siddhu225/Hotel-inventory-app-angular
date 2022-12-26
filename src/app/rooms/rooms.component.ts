import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { photoAlbum, Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  hotelName = 'Hotel taj';

  numberOfRooms = 10;

  isHidden = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 5,
    bookedRooms: 10,
    totalRooms: 20
  }

  roomList: RoomList[] = [];

  toggle() {
    this.isHidden = !this.isHidden;
  }

  constructor(private roomService: RoomsService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.roomList = this.roomService.getRooms();
    this.roomService.getPhotos().subscribe((data) => {
      console.log('data', data);
    });
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'HOTEL INVENTORY APP';
  }

  selectRoom(event: any) {
    console.log(event);
    // this.selectedRoom = room;
  }

  addRoom() {
    const room = {
      roomNumber: 5,
      roomPrice: 2000,
      rating: 1.15678,
      amenities: 'AC DELUXE LUXURY, FREE WIFI',
      checkInTime: new Date(),
      roomType: 'AC DELUXE'
    }
    this.roomList.push(room);
    this.roomList = [...this.roomList];
  }

}
