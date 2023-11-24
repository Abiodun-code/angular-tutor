import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInterface} from "../../mock-task"
import {TaskService} from "../../services/task.service"
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: TaskInterface[] = []

  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }
}
