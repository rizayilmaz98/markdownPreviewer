import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../redux/writes/writesSlice";

function WriteMarkdown() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.writes.text);

  return (
    <div className="col-6 ms-3">
      <textarea
        className="w-100 h-100 border-0 p-2 bg-yellow-1 shadow-border-1"
        placeholder="Your Text"
        value={text && text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      ></textarea>
    </div>
  );
}

export default WriteMarkdown;
