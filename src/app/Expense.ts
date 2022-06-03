export interface Expense {
  id?: number;
  name: string;
  amount: number;
  type: 'income' | 'expense';
}
