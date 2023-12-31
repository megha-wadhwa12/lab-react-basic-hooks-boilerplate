import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

function Counter4() {

    const {isDark} = useContext(AppContext)

    const [currAge,setCurrAge] = useState(0)
    const[currSib,setCurrSib] = useState(0)

    useEffect(()=>{
      return(()=>{
        console.log("Unmount");
      })
    },[])
  return (
    <div
      style={{
        border:`2px solid ${isDark? "White":"black"}`,
        padding: "20px",
        margin: "20px",
        backgroundColor: `${isDark? "black":"white"}`,
        color: `${isDark? "white":"black"}`
      }}
    >
      <h1>COUNTER-4</h1>
      <h2>My age: {currAge}</h2>
      <h2>My sibling: {currSib}</h2>

      <button onClick={()=>{
        setCurrAge((previous)=>previous+1)}}>
        Get Older
      </button>
      <button onClick={()=>{
        setCurrSib((previous)=>previous+1)}}>
        Get Sibling
      </button>
      <button onClick={()=>{
        setCurrAge(0),
        setCurrSib(0)
      }}>Reset</button>

    </div>
  );
}

export default Counter4;
