import { Component, inject, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { QuizzesQuestionService } from '../../../../core/services/quizzes-question.service';
import { take } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavUserComponent } from '../shared/nav-user/nav-user.component';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics-user',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    NavUserComponent
  ],
  templateUrl: './statistics-user.component.html',
  styleUrls: ['./statistics-user.component.css']
})
export class StatisticsUserComponent implements OnInit {
  userId = 1;
  avgCorrectAnswers: number;
  avgPoints: number;
  quizzesCompleted: number;
  percentageCorrectAnswers: number;
  chart: any;
  qqService: QuizzesQuestionService = inject(QuizzesQuestionService);

  ngOnInit() {
    this.loadStatistics();
  }

  loadStatistics() {
    // Obtener el promedio de respuestas correctas y actualizar el Chart1
    this.qqService.getAvgCorrectPerUser(this.userId).pipe(take(1)).subscribe({
      next: (data) => {
        this.avgCorrectAnswers = data;
        console.log('Promedio de respuestas correctas:', this.avgCorrectAnswers);
        this.loadChart1(); // Llamar al método para cargar el gráfico después de obtener el dato
      }
    });

    // Obtener otros datos estadísticos
    this.qqService.getAvgPointsPerUser(this.userId).pipe(take(1)).subscribe({
      next: (data) => {
        this.avgPoints = data;
        console.log('Promedio de puntos obtenidos por Quiz:', this.avgPoints);
      }
    });

    this.qqService.getCompletedPerUser(this.userId).pipe(take(1)).subscribe({
      next: (data) => {
        this.quizzesCompleted = data;
        console.log('Cantidad de cuestionarios resueltos totales:', this.quizzesCompleted);
      }
    });

    this.qqService.getPercentagePerUser(this.userId).pipe(take(1)).subscribe({
      next: (data) => {
        this.percentageCorrectAnswers = data;
        console.log('Porcentaje de respuestas correctas:', this.percentageCorrectAnswers);
      }
    });
  }

  // Método para cargar el primer gráfico (Chart1)
  private loadChart1(): void {
    // Si el gráfico ya existe, destruirlo antes de crear uno nuevo
    if (this.chart) {
      this.chart.destroy();
    }

    // Crear el gráfico con el porcentaje de respuestas correctas
    this.chart = new Chart("Chart1", {
      type: "doughnut",
      data: {
        labels: ['Correctas', 'Incorrectas'],
        datasets: [{
          label: 'Porcentaje de respuestas correctas',
          data: [this.avgCorrectAnswers, 100 - this.avgCorrectAnswers], // Usar avgCorrectAnswers y su complementario
          backgroundColor: ['#FF4081', '#E0E0E0'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
