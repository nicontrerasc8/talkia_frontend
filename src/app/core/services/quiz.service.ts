import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizUserService {
  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);

  constructor() { }
  list():Observable<any>{
    return this.http.get(this.url + "/quizzes");
  }
  listByUser(userName: String): Observable<any>{
    return this.http.get(this.url + "/quizzes/username/" + userName,{});
  }
  insert(userId : number): Observable<any>{
    return this.http.post(this.url + "/quiz/"+ userId ,{});
  }



}

