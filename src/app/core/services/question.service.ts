import {inject, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Question} from '../model/question';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Level} from '../model/level';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);
  private listaCambio: Subject<Question[]> = new Subject<Question[]>();

  constructor() { }

  list():Observable<any>{
    return this.http.get(this.url + "/questions");
  }
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(`${this.url}/levels`);
  }
  listQuestionsByLevel(level: String): Observable<any>{
    return this.http.get(this.url + "/level/" + level, {});
  }

  insert(question: Question): Observable<any>{
    return this.http.post(this.url + "/question", question);
  }
  update(question: Question): Observable<any>{
    return this.http.put(this.url + "/question", question);
  }
  delete(id:number): Observable<any>{
    return this.http.delete(this.url + "/question/" + id);
  }
  setList(listaNueva: Question[]){
    this.listaCambio.next(listaNueva);
  }

  listQuestionsByDescription(description: string):Observable<Question[]>{
    return this.http.get<Question[]>(this.url + "/questions/description/" + description);
  }

  getList():Observable<Question[]>{
    return this.listaCambio.asObservable();
  }

  getQuestionByDescription(description: string): Observable<any>{
    return this.http.get(this.url + "/question/description/" + description);
  }
  listId(id: number): Observable<any>{
    console.log(this.url + "/question/" + id)
    return this.http.get<Question[]>(this.url + "/question/" + id);
  }
}
