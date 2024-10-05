import React, { useState } from "react";
import MinusCircle from "../../assets/icons/MinusCircle";
import PlusCircle from "../../assets/icons/PlusCircle";

export default ({ title, content, expanded }) => {
  const [isExpanded, setIsExpanded] = useState(expanded || false);
  return (
    <button
      type="button"
      className="px-2 py-4 border-b"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h1 className="text-left text-lg font-semibold flex justify-between py-2">
        {title}

        <span className="">
          {isExpanded ? <MinusCircle /> : <PlusCircle />}
        </span>
      </h1>
      <p
        className={`text-left text-gray-700 transition-all ${
          isExpanded ? "h-auto" : "h-0 overflow-hidden"
        }`}
      >
        {content}
      </p>
    </button>
  );
};
