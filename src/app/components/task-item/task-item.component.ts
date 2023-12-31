import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task: any
}
