import React from "react";

function ListStack({ label }) {
  return (
    <li className="px-4 py-0.5 text-xs text-primary rounded-full bg-tertiary bg-opacity-80">
      {label}
    </li>
  );
}

export default ListStack;
