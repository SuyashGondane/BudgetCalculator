import { Component, OnInit } from '@angular/core';
import { Expense } from './Expense';
import { BudgetService } from './services/budget.service';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Budget Calculator';
  greenColor: string = '#00c853';
  redColor: string = '#d50000';
  headerOne: string = 'INCOME';
  headerTwo: string = 'EXPENSE';

  incomeListData: Expense[] = [];
  expenseListData: Expense[] = [];

  constructor(
    private expenseService: ExpenseService,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    this.expenseService.getIncomeList().subscribe((data) => {
      this.incomeListData = data;
      this.expenseService.getExpenseList().subscribe((data) => {
        this.expenseListData = data;
        const fullListData: Expense[] = [
          ...this.incomeListData,
          ...this.expenseListData,
        ];
        this.budgetService.updateBudget(fullListData);
      });
    });
  }

  addIncome(expense: Expense) {
    this.expenseService
      .addTypeIncome(expense)
      .subscribe((exp) => this.incomeListData.push(exp));

    this.budgetService.updateBudget([expense]);
  }

  addExpense(expense: Expense) {
    this.expenseService
      .addTypeExpense(expense)
      .subscribe((exp) => this.expenseListData.push(exp));

    this.budgetService.updateBudget([expense]);
  }
}
