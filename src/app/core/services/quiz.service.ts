import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);

  constructor() { }
 //admin
  list():Observable<any>{
    return this.http.get(this.url + "/quizzes");
  }
  listByUser(userName: String): Observable<any>{
    return this.http.get(this.url + "/quizzes/username/" + userName,{});
  }
  //user

  insert(userId : number): Observable<any>{
    return this.http.post(this.url + "/quiz/"+ userId ,{});
  }
  listQuizzesByUser(userId: number):Observable<any>{
    return this.http.get(this.url + "/quizzes/"+ userId);
  }



  getQuizById(quizId: number): Observable<any>{
    return this.http.get(this.url + "/quiz/id/"+ quizId, {});
  }



}

