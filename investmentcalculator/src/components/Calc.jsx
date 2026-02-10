import React, { useState } from 'react';
import calculateInvestment from './calculateInvestment';

const Calc = ({ onCalculate }) => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  //By Combining States:
//   const [values, setValues] = useState({
//   initialInvestment: 0,
//   annualInvestment: 0,
//   expectedReturn: 0,
//   duration: 0
// });

  function calculate(nextValues) {

    //    const updated = { ...values, [field]: value };
    // setValues(updated);
    const { initialInvestment, annualInvestment, expectedReturn, duration } = nextValues;

    if (
      initialInvestment > 0 &&
      annualInvestment > 0 &&
      expectedReturn > 0 &&
      duration > 0
    ) {
      onCalculate(
        calculateInvestment({
          initialInvestment,
          annualInvestment,
          expectedReturn,
          duration
        })
      );
    } else {
      onCalculate([]); // clear table when inputs invalid
    }
  }

  const inputStyle =
    "bg-white text-black border border-gray-400 p-2 m-2 rounded w-40";

  return (
    <div className="h-80 w-full bg-emerald-900 text-white flex flex-col items-center justify-center">
        <div>
                  <input
        type="number"
        className={inputStyle}
        placeholder="Initial Investment"
        onChange={(e) => {
          const value = Number(e.target.value || 0);
          setInitialInvestment(value);
          calculate({ initialInvestment: value, annualInvestment, expectedReturn, duration });
        }}
      />

      <input
        type="number"
        className={inputStyle}
        placeholder="Annual Investment"
        onChange={(e) => {
          const value = Number(e.target.value || 0);
          setAnnualInvestment(value);
          calculate({ initialInvestment, annualInvestment: value, expectedReturn, duration });
        }}
      />
        </div>


        <div >
      <input
        type="number"
        className={inputStyle}
        placeholder="Expected Return (%)"
        onChange={(e) => {
          const value = Number(e.target.value || 0);
          setExpectedReturn(value);
          calculate({ initialInvestment, annualInvestment, expectedReturn: value, duration });
        }}
      />


      <input
        type="number"
        className={inputStyle}
        placeholder="Duration (years)"
        onChange={(e) => {
          const value = Number(e.target.value || 0);
          setDuration(value);
          calculate({ initialInvestment, annualInvestment, expectedReturn, duration: value });
        }}
      />
      </div>

    </div>
  );
};

export default Calc;
