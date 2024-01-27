"use client";
import { useState } from "react";

export function CounterButton() {
  const [counter, setCounter] = useState(0);
  return (
    <button
      className="bg-white "
      onClick={() => setCounter((prev) => prev + 1)}
    >
      {" "}
      {counter}
    </button>
  );
}
