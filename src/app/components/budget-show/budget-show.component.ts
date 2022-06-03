import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-show',
  templateUrl: './budget-show.component.html',
  styleUrls: ['./budget-show.component.css'],
})
export class BudgetShowComponent implements OnInit {
  budget: number = 0;
  greenColor: string = '#00c853';
  redColor: string = '#d50000';
  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.onBudgetChange().subscribe((val) => (this.budget = val));
  }
}
