import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator></TipCalculator>
    </div>
  );
}

function TipCalculator({}) {
  const [bill, setBill] = useState("");
  const [percente1, setPercent1] = useState(0);
  const [percente2, setPercent2] = useState(0);

  const tip = (bill * (percente1 + percente2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage children percentage={percente1} onSelect={setPercent1}>
        o quanto voce gostou do servico?
      </SelectPercentage>
      <SelectPercentage children percentage={percente2} onSelect={setPercent2}>
        o quanto seu amigo gostou do servico?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the Bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Insastifeito (0%)</option>
        <option value="5">é ok(5%)</option>
        <option value="10">agradavel(10%)</option>
        <option value="20">o cara e foda parceiro(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      {" "}
      vc pagou {bill + tip} (${bill} + ${tip} gorjeta)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}
