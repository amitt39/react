import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click {count} times
      </button>
    </>
  );
}

export default Button;
