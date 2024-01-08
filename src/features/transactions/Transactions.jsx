import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdrawal, transfer, selectBalance } from "./transactionsSlice";
import "./transactions.scss";

const Transactions = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [amountStr, setAmountStr] = useState("0.00");

  const onTransaction = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.name;
    const amount = +amountStr;

    switch (action) {
      case "deposit":
        dispatch(deposit({ amount }));
        break;
      case "withdraw":
        dispatch(withdrawal({ amount }));
        break;
      case "transfer":
        const recipient = e.target.recipient.value;
        dispatch(transfer({ amount, name: recipient }));
        break;
      default:
        break;
    }
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        {/* ... your form input elements ... */}
      </form>
    </section>
  );
};

export default Transactions;
