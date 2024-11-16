import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../model/user';
import {SuscriptionsHistory} from '../model/suscriptions.history';

@Injectable({
  providedIn: 'root'
})

export class SuscriptionsHistoryService{
  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);
  private listaCambio: Subject<SuscriptionsHistory[]> = new Subject<SuscriptionsHistory[]>()

  constructor() { }

  list():Observable<any> {
    return this.http.get(this.url + "/histories");
  }

  listId(id: number):Observable<any>{
    return this.http.get(this.url + "/user/"+ id);
  }

  insert(user_id: number, sus_id: number, paymentType_id: number): Observable<any> {
    return this.http.post(this.url + "/suscriptionHistory/" + user_id + "/" + sus_id + "/" + paymentType_id,{}, {responseType:'text'});
  }

  setList(listaNueva: SuscriptionsHistory[]){
    this.listaCambio.next(listaNueva);
  }

  getList():Observable<SuscriptionsHistory[]>{
    return this.listaCambio.asObservable();
  }

  listHistories():Observable<any>{
    return this.http.get(this.url + "/histories");
  }
  listHistoryByPaymentType(paymentType: string):Observable<any>{
    return this.http.get(this.url +"/suscriptionHistoryByPaymentType/"+ paymentType);
  }

  listHistoryBySuscription(suscription: string):Observable<any>{
    return this.http.get(this.url +"/listHistoryBySuscription/"+ suscription);
  }

  listHistoryByUser(userName: string): Observable<any>{
    return this.http.get(this.url +"/suscriptionHistoryByUser/"+userName);
  }

  listHistoryByUserId(userId: number): Observable<any>{
    return this.http.get(this.url + "/suscriptionsHistoryById/" + userId);
  }

  listSuscriptionsByYear(userId: number ,year: number):Observable<any>{
    return this.http.get(this.url +"/paymentbyyear/"+ userId +"/" +year);
  }


}
