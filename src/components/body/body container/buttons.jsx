import React from "react";

function Buttons({ value }) {
  //console.log(b);
  return (
    <button
      className={
        "p-1 px-2 rounded-xl bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400"
      }
    >
      {value}
    </button>
  );
}

export default Buttons;
