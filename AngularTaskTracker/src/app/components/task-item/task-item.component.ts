import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/api/models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask | undefined;

  constructor() {}

  ngOnInit(): void {}
}
