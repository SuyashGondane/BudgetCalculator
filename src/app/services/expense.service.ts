import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../Expense';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  budgetTotal: number = 0;
  apiBaseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getIncomeList(): Observable<Expense[]> {
    const url = `${this.apiBaseUrl}/income`;
    return this.http.get<Expense[]>(url);
  }

  getExpenseList(): Observable<Expense[]> {
    const url = `${this.apiBaseUrl}/expense`;
    return this.http.get<Expense[]>(url);
  }

  deleteTypeIcome(expense: Expense): Observable<Expense> {
    const url = `${this.apiBaseUrl}/income/${expense.id}`;
    return this.http.delete<Expense>(url);
  }

  deleteTypeExpense(expense: Expense): Observable<Expense> {
    const url = `${this.apiBaseUrl}/expense/${expense.id}`;
    return this.http.delete<Expense>(url);
  }

  addTypeIncome(expense: Expense): Observable<Expense> {
    const url = `${this.apiBaseUrl}/income`;
    return this.http.post<Expense>(url, expense, httpOptions);
  }

  addTypeExpense(expense: Expense): Observable<Expense> {
    const url = `${this.apiBaseUrl}/expense`;
    return this.http.post<Expense>(url, expense, httpOptions);
  }
}
