import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

function Effect() {

    const [count,setCount] = useState(0)
    const [age,setAge] = useState(30)
    const {isDark} = useContext(AppContext)

    useEffect(()=>{
    console.log("Component Re-renders"); //shows intitially also because first time also rendering happens
    console.log("count: ", count);
    console.log("age: ", age);

    },[age,count]) // called dependency array because depends on the state


    useEffect(()=>{
        return ()=>{
            console.log("unmount");
        }
    },[])

    
  return (
    <div style={{
        border:`2px solid ${isDark? "White":"black"}`,
        backgroundColor: `${isDark? "#242424":"White"}`,
        padding: "20px",
        margin: "20px",
        color: `${isDark? "white":"black"}`
    }}>
        <h1> u s e E F F E C T </h1>
        <h3>Count: {count}</h3>
        <h3>Age: {age}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>+</button>
        <button onClick={()=>{
            setAge(age-1)
        }}>- age</button>
    </div>  
    )
}

export default Effect