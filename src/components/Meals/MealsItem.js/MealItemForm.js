import Input from "../../UI/Input";
import "./MealItemForm.css";
import { useRef, useState } from "react";

function MealItemForm(props) {
  const amountRef = useRef();
  const [amountValid, setAmount] = useState(true);
  function onSubmitting(event) {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNo = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 1 ||
      enteredAmountNo > 5
    ) {
      setAmount(false);
      return;
    }
    props.onAddCart(enteredAmountNo);
  }

  return (
    <form className="form" onSubmit={onSubmitting}>
      <Input
        ref={amountRef}
        lable="Amount"
        Input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
export default MealItemForm;
