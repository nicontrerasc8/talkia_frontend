import {Component, inject, OnInit} from '@angular/core';
import {NavUserComponent} from '../shared/nav-user/nav-user.component';
import {NgStyle} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {UsersService} from '../../../../core/services/users.service';

@Component({
  selector: 'app-tracking-user',
  standalone: true,
  imports: [
    NavUserComponent,
    NgStyle,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tracking-user.component.html',
  styleUrl: './tracking-user.component.css'
})
export class TrackingUserComponent implements OnInit{

  points: number = 0;
  rocketPosition: number = 0;
  userService: UsersService = inject(UsersService);
  userId: number = 6;//parseInt(localStorage.getItem('userId') || '0', 10);
  userLevelId: number = 1; //parseInt(localStorage.getItem('levelId') || '0', 10);
  onTrack: number = parseInt(localStorage.getItem('onTrack') || '0', 10);

  ngOnInit(){
    if(this.onTrack == 1){
      this.userService.getUserById(this.userId).subscribe({
        next: (data) => {
          this.points = data.totalPoints;
          console.log("Puntos del user " + this.userId + ": " + this.points);
          this.updateRocketPosition(this.points);
          console.log("Posición cargada " + this.rocketPosition);
        },
        error: (error) => console.log(error)
      });
    }
    else{
      this.addPoints(parseInt(localStorage.getItem('pointsWin') || '0', 10));
      localStorage.setItem('onTrack', String(1));
      console.log("Posición actualizada " + this.rocketPosition);
    }
  }

  addPoints(increment: number) {
    this.points = Math.min(this.points + increment, 1000);
    this.updateRocketPosition(this.points);
  }

  updateRocketPosition(points: number) {
    switch (this.userLevelId) {
      case 1:
        this.rocketPosition = points * (15/100);
        break;

      case 2:
        this.rocketPosition = points * (10/100);
        break;

      case 3:
        this.rocketPosition = 60
        break;
    }

    //this.rocketPosition = (this.points / 1000) * 100;
  }
}
