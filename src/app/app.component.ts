import { Component, ViewEncapsulation } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';
import { RoomRequest } from '../interfaces/roomRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  public roomList: Array<any> = [];
  public SMALLCARD = 'small-card';
  public BIGCARD = 'big-card';

  constructor(
    private roomService: RoomsService
  ) {

    this.roomService.get().subscribe( (data: RoomRequest) => {
      this.roomList = data.content;
      console.log(this.roomList);
    });
  }
}
