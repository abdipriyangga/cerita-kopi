import React, { useState } from "react";
import Swal from "sweetalert2";

const Counter = ({ stateValue, max, counterPlus, counterMinus }) => {
  const [counter, setCounter] = useState(stateValue);
  const onCount = (type) => {
    let result = counter;
    if (type === "plus") {
      if (counter === max) {
        Swal.fire("Oops!", `There are only have ${max} of items`);
      } else {
        counterPlus();
        result = counter + 1;
      }
    }
    if (type === "minus") {
      if (counter <= 0) {
        Swal.fire("Oops!", "Minimum 0 of items");
      } else {
        counterMinus();
        result = counter - 1;
      }
    }
    setCounter(result);
  };
  return (
    <>
      <div className="space-x-5 mt-6 ml-20">
        <button onClick={() => onCount("minus")} className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-10 h-10">
          -
        </button>
        <span className="text-lg font-bold">{counter}</span>
        <button onClick={() => onCount("plus")} className="focus:outline-none text-black font-bold text-lg bg-yellow-400 py-2 rounded-full w-10 h-10">+</button>

      </div>
    </>
  );
};

Counter.defaultProps = {
  counterPlus: () => { },
  counterMinus: () => { },
};
export default Counter;