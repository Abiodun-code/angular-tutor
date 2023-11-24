import { Injectable } from '@angular/core';
import { TaskInterface } from "../mock-task"
import {Observable} from "rxjs"
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:5000/tasks";

  getTasks(): Observable<TaskInterface[]>{
    return this.http.get<TaskInterface[]>(this.apiUrl) 
  }
}
