import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../api/mock-tasks';
import { ITask } from '../../api/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
