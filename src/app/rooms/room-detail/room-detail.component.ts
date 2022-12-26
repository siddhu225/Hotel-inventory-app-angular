import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {



  constructor(private route: ActivatedRoute) { }

  id$ = this.route.params.pipe(map(params => params['id']))

  ngOnInit(): void {
  }

}
