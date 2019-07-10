import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getMovieList$(): Observable<any> {
    const { movieListURL } = environment;
    return this.http.get(movieListURL);
  }
  getMovieDetail$(id): Observable<any> {
    const { movieDetailURL } = environment;
    return this.http.get(movieDetailURL(id));
  }
}
