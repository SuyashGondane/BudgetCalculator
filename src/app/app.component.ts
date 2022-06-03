import { Component, OnInit } from '@angular/core';
import { Expense } from './Expense';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Budget Calculator';
  greenColor = '#00c853';
  redColor = '#d50000';
  headerOne = 'INCOME';
  headerTwo = 'EXPENSE';

  incomeListData: Expense[] = [];
  expenseListData: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .getIncomeList()
      .subscribe((data) => (this.incomeListData = data));

    this.expenseService
      .getExpenseList()
      .subscribe((data) => (this.expenseListData = data));
  }

  addIncome(expense: Expense) {
    this.expenseService
      .addTypeIncome(expense)
      .subscribe((exp) => this.incomeListData.push(exp));
  }

  addExpense(expense: Expense) {
    this.expenseService
      .addTypeExpense(expense)
      .subscribe((exp) => this.expenseListData.push(exp));
  }
}
