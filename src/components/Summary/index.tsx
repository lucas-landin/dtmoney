import { Container } from "./styles";
import incomeimg from "../../assets/income.svg";
import outcomeimg from "../../assets/outcome.svg";
import totalimg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactiocContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.transactionType === "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeimg} alt="Etradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeimg} alt="Saidas" />
        </header>
        <strong> -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalimg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
