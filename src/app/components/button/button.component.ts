import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string | undefined
  @Input() color: string | undefined
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }
}
