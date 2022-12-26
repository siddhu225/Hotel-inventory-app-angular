import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomGuard } from '../guards/room.guard';

const routes: Routes = [
  { 
    path: '', 
    component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [
      { path: 'add', component: RoomsAddComponent },
      { path: ':id', component: RoomDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
