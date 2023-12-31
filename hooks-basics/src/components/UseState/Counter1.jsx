import { useContext, useState } from "react"
import React from 'react'
import { AppContext } from "../useContext/ParentContext";

const Counter1 = () => {

    const {isDark} = useContext(AppContext)

    const [currAge,setCurrAge] = useState(20);

    const decrease =()=>{
        setCurrAge(currAge-1)
        console.log("currAge: ", currAge);
    }

    const increase10years = ()=> {
        // setCurrAge(currAge+10)
        for(let i=0;i<10;i++){
            setCurrAge((previous)=> {
                console.log("previous: ", previous);
               return previous+1
            });  //only increase one time because it setCurrAge/setState has asynchronous behaviour
        }
    }

  return (
    <div style={{
        border:`2px solid ${isDark? "White":"black"}`,
        padding: "20px",
        margin: "20px",
        backgroundColor: `${isDark? "black":"white"}`,
        color: `${isDark? "white":"black"}`
    }}>
        <h1>COUNTER-1</h1>
        <h2>Age : {currAge}</h2>
        <button onClick={()=>{
            setCurrAge(currAge+1)
        }}>Get Older</button>
        <button onClick={decrease}>Get Younger</button>
        <button onClick={increase10years}>Get older by 10 Years</button>
    </div>
  )
}

export default Counter1