import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  @Input() expense!: Expense;
  @Input() badgeColor: string = '#69f0ae';
  @Output() closeBtnClick: EventEmitter<Expense> = new EventEmitter();
  faTimes = faTrash;
  showCloseButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onHoverToggle(): void {
    this.showCloseButton = !this.showCloseButton;
  }

  onCloseClick(expense: Expense): void {
    this.closeBtnClick.emit(expense);
  }
}
