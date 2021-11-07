import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/api/models';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask | undefined;
  @Output() onDeleteTaskEmitter: EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminderEmitter: EventEmitter<ITask> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: ITask | undefined) {
    this.onDeleteTaskEmitter.emit(task);
  }

  onToggleReminder(task: ITask | undefined) {
    this.onToggleReminderEmitter.emit(task);
  }
}
