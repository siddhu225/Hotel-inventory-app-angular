import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {

  @ViewChild('rooms', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  title = 'hotelinventoryapp';

  constructor(private configService: ConfigService) {

  }

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}
