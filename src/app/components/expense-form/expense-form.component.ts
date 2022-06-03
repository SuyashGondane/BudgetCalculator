import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/app/Expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  @Output() addIncome: EventEmitter<Expense> = new EventEmitter();
  @Output() addExpense: EventEmitter<Expense> = new EventEmitter();
  amount: number = 0;
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.amount === 0) {
      alert('amount cannot be 0.');
      return;
    }
    if (this.name === '') {
      alert('name cannot be empty.');
      return;
    }

    const newExpense: Expense = {
      amount: this.amount,
      name: this.name,
      type: this.amount > 0 ? 'income' : 'expense',
    };

    if (newExpense.type === 'income') {
      this.addIncome.emit(newExpense);
    } else {
      this.addExpense.emit(newExpense);
    }

    this.amount = 0;
    this.name = '';
  }
}
