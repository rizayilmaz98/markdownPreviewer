import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { exampleText } from '../redux/writes/writesSlice'
function ExampleMarkdown() {
  const [status,setStatus] = useState("");
  const dispatch = useDispatch();
  const changeState = () => {
    if(status === ""){
      setStatus("example");
      dispatch(exampleText("example"))
    } else{
      setStatus("");
      dispatch(exampleText(""));
    }
  }
  return (
    <>
    <div className='col-12 mt-1 d-flex justify-content-end'>
        <div className='border bg-yellow px-3 cursor fs-3 fw-bold' title="Example Markdown" onClick={changeState}>?</div>
    </div>
    <div className='col-12'>
      <p className='fs-1 fw-bold text-center'>Markdown Previewer</p>
    </div>
    </>
  )
}

export default ExampleMarkdown