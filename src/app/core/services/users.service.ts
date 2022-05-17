import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../../shared/data/user.interface";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UsersService {
    private url = "https://jsonplaceholder.typicode.com/users";

    constructor(private http: HttpClient) {
    }

    public getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.url);
    }

    public deleteUser(id: number): Observable<{}> {
        return this.http.delete(`${this.url}/${id}`);
    }

    public addUser(user: IUser): Observable<{}> {
        return this.http.post(this.url, user);
    }

    public updateUser(id: number, user: IUser): Observable<{}> {
        return this.http.patch(`${this.url}/${id}`, user);
    }
}
