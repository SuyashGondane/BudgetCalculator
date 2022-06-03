import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BudgetCalculator';

  greenColor = '#00c853';
  redColor = '#d50000';
  headerOne = 'INCOME';
  headerTwo = 'EXPENSE';
}
