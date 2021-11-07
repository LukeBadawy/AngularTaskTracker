import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/api/models';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask | undefined;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
