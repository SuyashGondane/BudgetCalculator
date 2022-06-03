import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/Expense';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  @Input() expense!: Expense;
  @Input() badgeColor: string = '#69f0ae';
  faTimes = faTimes;
  showCloseButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onHoverToggle() {
    console.log(this.showCloseButton);
    this.showCloseButton = !this.showCloseButton;
  }
}
