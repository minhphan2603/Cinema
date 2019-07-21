import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  register(newUser) {
    const { registerUserURL } = environment;
    return this.http.post(registerUserURL, newUser);
  }
  login(user) {
    const { loginUserURL } = environment;
    const { userName, password } = user;
    return this.http.post(loginUserURL(userName, password), null);
  }
}
