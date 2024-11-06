import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuizzesQuestionService {
  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);

  constructor() { }
  listQuestionsByQuizId(quizId: number): Observable<any>{
    return this.http.get(this.url + "/quizzesQuestion/listQuestionsByQuiz/" + quizId,{});
  }

  answerQuestion(qqId: number, userAnswer: string): Observable<any>{
    return this.http.put(this.url + "/quizzesQuestion/answerQuestion/" + qqId + "/" + userAnswer, {});
  }
}
