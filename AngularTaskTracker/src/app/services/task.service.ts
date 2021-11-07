import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from 'src/app/api/models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(deleteUrl);
  }

  updateTaskReminder(task: ITask): Observable<ITask> {
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(updateUrl, task, httpOptions);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }
}
