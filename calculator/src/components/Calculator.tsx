import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult((Number(num1) + Number(num2)).toString());
  };

  const handleSubtract = () => {
    setResult((Number(num1) - Number(num2)).toString());
  };

  const handleMultiply = () => {
    setResult((Number(num1) * Number(num2)).toString());
  };

  const handleDivide = () => {
    setResult((Number(num1) / Number(num2)).toString());
  };
  return (
    <div>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />
      <div className="button-group">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
      <p className="result">Result: {result}</p>
    </div>
  );
};

export default Calculator;