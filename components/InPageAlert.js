import React from "react";

export default function InPageAlert({ children }) {
  return (
    <div className="font-sans bg-light-grey font-light text-base py-4 px-3 rounded text-center">
      {children}
    </div>
  );
}
