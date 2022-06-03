import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/Expense';

const mockExpenses: Expense[] = [
  {
    name: 'Salary',
    amount: 1000,
  },
  {
    name: 'Stocks',
    amount: 100,
  },
  {
    name: 'Business',
    amount: 500,
  },
];

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input() textColor: string = '#00c853';
  @Input() headerText: string = 'INCOME';
  expenses: Expense[] = mockExpenses;
  greenBadgeColor: string = '#B9F6CA';
  redBadgeColor: string = '#FF8A80';

  constructor() {}

  ngOnInit(): void {}

  getBadgeColor(): string {
    return this.textColor === '#00c853'
      ? this.greenBadgeColor
      : this.redBadgeColor;
  }
}
