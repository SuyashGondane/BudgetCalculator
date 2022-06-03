import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input() textColor: string = '#00c853';
  @Input() headerText: string = 'INCOME';
  @Input() amountList: Expense[] = [];
  greenBadgeColor: string = '#B9F6CA';
  redBadgeColor: string = '#FF8A80';

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  getBadgeColor(): string {
    return this.textColor === '#00c853'
      ? this.greenBadgeColor
      : this.redBadgeColor;
  }

  deleteExpense(expense: Expense) {
    if (expense.type === 'income') {
      this.expenseService
        .deleteTypeIcome(expense)
        .subscribe(
          () =>
            (this.amountList = this.amountList.filter(
              (exp) => exp.id != expense.id
            ))
        );
    } else if (expense.type === 'expense') {
      this.expenseService
        .deleteTypeExpense(expense)
        .subscribe(
          () =>
            (this.amountList = this.amountList.filter(
              (exp) => exp.id != expense.id
            ))
        );
    }
  }
}
