import './Expensetion.css'

function Expensetion(props) {
    const expenseDate = new Date(2021, 3, 9);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.76;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default Expensetion;
