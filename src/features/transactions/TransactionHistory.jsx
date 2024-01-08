import "./transactionHistory.scss";
import { useSelector } from "react-redux";
import { selectHistory } from "./transactionsSlice";

const TransactionRow = ({ transaction }) => (
  <tr>
    <th scope="row">{transaction.type}</th>
    <td>{transaction.amount.toFixed(2)}</td>
    <td>{transaction.balance.toFixed(2)}</td>
  </tr>
);

const TransactionHistory = () => {
  const history = useSelector(selectHistory);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {history.map((transaction, index) => (
            <TransactionRow key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
