import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Expense } from '../Expense';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number = 0;
  subject: Subject<any> = new Subject();

  constructor() {}

  updateBudget(amountList: Expense[], add: boolean = true): void {
    if (add) amountList.map((a) => (this.budget += a.amount));
    else amountList.map((a) => (this.budget -= a.amount));

    this.subject.next(this.budget);
  }

  onBudgetChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
