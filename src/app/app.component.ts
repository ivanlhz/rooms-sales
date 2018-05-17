import { Component } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';
import { RoomRequest } from '../interfaces/roomRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public roomList: Array<any> = [];

  constructor(
    private roomService: RoomsService
  ) {

    this.roomService.get().subscribe( (data: RoomRequest) => {
      this.roomList = data.content;
    });
  }
}
