import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Content} from '../model/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private url = environment.apiUrl
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  list(): Observable<any>{
    return this.http.get(this.url + "/contents");
  }

  listByTitle(title: String): Observable<any>{
    return this.http.get(this.url + "/contents/title/" + title,{});
  }

  listContentByLevels(level: String): Observable<any>{
    return this.http.get(this.url + "/content_level/" + level, {});
  }

  listContentByTypes(type: String): Observable<any>{
    return this.http.get(this.url + "/content_type/" + type, {});
  }

  listContentByTheme(theme: String): Observable<any>{
    return this.http.get(this.url + "/content_theme/" + theme, {});
  }

  listContentByLevelsAndTypes(level: String, type: String): Observable<any>{
    return this.http.get(this.url + "/content_level_type/" + level + "/"+ type, {});
  }

  listContentByLevelsAndTheme(level: String, theme: String): Observable<any>{
    return this.http.get(this.url + "/content_theme_level/" + level + "/"+ theme, {});
  }

  getContentById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.url}/content/id/${id}`);
  }


  listFilterContent(level?: string, theme?: string, type?: string): Observable<any>{

    const paramsObj: any = {};

    if (level) {
      paramsObj['level'] = level;
    }
    if (type) {
      paramsObj['type'] = type;
    }
    if (theme) {
      paramsObj['theme'] = theme;
    }

    const params = new HttpParams({ fromObject: paramsObj });
    return this.http.get(this.url + "/contents/filter", {params});
  }

  listContentOrderByDateOfPublicationDesc(): Observable<any>{
    return this.http.get(this.url + "/content_fechaDesc");
  }
  listContentOrderByDateOfPublicationAsc(): Observable<any>{
    return this.http.get(this.url + "/content_fechaAsc");

  }
  insert(content:Content): Observable<any>{
    return this.http.post(this.url + "/content", content);
  }

  update(content: Content): Observable<any>{
    return this.http.put(this.url + "/content", content);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + "/content/"+id);
  }
}
