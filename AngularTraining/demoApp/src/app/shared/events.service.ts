import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEvent } from "../event-bootcamp/event";


@Injectable({
    providedIn:"root"
})

export class EventService{
    constructor(private http:HttpClient){};
    private url = 'assets/events.json'

    getEvents():Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.url);
    }
}
