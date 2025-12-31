export type Transfer = {
  id: string;
  name: string;
  amount: number;
  type: 'credit' | 'debit';
  date: string;
};
