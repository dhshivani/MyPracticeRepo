import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [converted, setConverted] = useState("");

  // Event Handlers
  const increment = () => {
    setCount(prev => prev + 1);
    setMessage("Value incremented");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setMessage("Value decremented");
  };

  const sayWelcome = (text) => {
    alert(`Hello, ${text}`);
  };

  const onPress = (e) => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === "euro") {
      const convertedValue = parseFloat(amount) * 0.011; // Example rate: ₹1 = €0.011
      setConverted(`Converting to Euro: amount is €${convertedValue.toFixed(2)}`);
    } else {
      setConverted("Unsupported currency");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Currency Convertor!!!</h1>

      {/* Counter buttons */}
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{message}</p>

      {/* Say Welcome */}
      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>

      {/* Synthetic event */}
      <button onClick={onPress}>Click on me</button>

      <br /><br />

      {/* Currency Convertor */}
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>{converted}</p>
    </div>
  );
}

export default App;
