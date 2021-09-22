import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Remaining" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}