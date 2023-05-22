import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

function ShowMarkdown() {
  
  const textResult = useSelector((state) => state.writes.text);

  return (
    <div className="col-6 scrollable-text p-2 bg-yellow-1 shadow-border-2">
      <div className="rounded-3">
        <ReactMarkdown>{textResult}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ShowMarkdown;
