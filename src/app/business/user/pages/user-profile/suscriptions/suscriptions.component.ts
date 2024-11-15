import {Component, inject, OnInit} from '@angular/core';
import {NavUserComponent} from '../../shared/nav-user/nav-user.component';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SuscriptionsHistoryService} from '../../../../../core/services/suscriptions-history.service';
import {MatTableDataSource} from '@angular/material/table';
import {NgForOf, NgIf} from '@angular/common';
import {DialogPayComponent} from '../../../../welcome/pages/register/pages/dialog-pay/dialog-pay.component';
import {MatDialog} from '@angular/material/dialog';
import {SuscriptionDialogComponent} from './suscription-dialog/suscription-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HistoryObject} from '../../../../../core/model/history-object';

@Component({
  selector: 'app-suscriptions',
  standalone: true,
  imports: [
    NavUserComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    MatChip,
    RouterOutlet,
    MatCardTitle,
    NgForOf,
    RouterLink,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './suscriptions.component.html',
  styleUrl: './suscriptions.component.css'
})
export class SuscriptionsComponent implements OnInit{

  historySuscriptionsService: SuscriptionsHistoryService = inject(SuscriptionsHistoryService);
  userId: number = 1;
  listH: HistoryObject[] = [];
  currentPlan: HistoryObject = new HistoryObject();
  dataSource: MatTableDataSource<HistoryObject> = new MatTableDataSource<HistoryObject>();
  years: number[] = [2020, 2021, 2022, 2023 ,2024];
  selectedYear: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(){
    this.historySuscriptionsService.listHistoryByUserId(this.userId).subscribe({
      next: (data) => {
        this.listH = data;
        console.log(this.listH);
        this.currentPlan = this.listH[0];
        console.log(this.currentPlan);
        console.log("Data cargada :)");
      },
      error: (error) => console.log(error),
    })
  }

  onChange(){
    console.log(this.selectedYear);
    this.historySuscriptionsService.listSuscriptionsByYear(this.userId, this.selectedYear).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        console.log("Data cargada :)");
      },
      error: (error) => console.log(error),
    })
  }



  openDialog(event: Event){
    this.dialog.open(SuscriptionDialogComponent)
  }
}
