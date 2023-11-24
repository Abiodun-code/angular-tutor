import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from '../button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string | undefined

  toogleAddTask(){
    console.log("object")
  }
}
