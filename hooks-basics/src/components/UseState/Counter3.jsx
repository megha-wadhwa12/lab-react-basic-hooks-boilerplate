import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

function Counter3() {

    const [data,setData] = useState({age: 20,sibling: 3} )
    // const [increaseCount,isDark] = useContext
    const {decreaseCount,isDark} = useContext(AppContext);

    // function handleAge(){
    //     setData({
    //         ...data,
    //         age: data.age+1  //age will be added at end , will take the second age
    //     })
    // }

    // const handleSib = ()=>{
    //     setData({
    //         ...data,
    //         sibling: data.sibling+1,
    //     })
    // }

    //Another way
    const handleData=(key)=>{
        setData({
            ...data, 
            [key]: data[key]+1,
        })
    }

  return (
<div style={{
        border:`2px solid ${isDark? "White":"black"}`,
        padding: "20px",
        margin: "20px",
        backgroundColor: `${isDark? "black":"white"}`,
        color: `${isDark? "white":"black"}`
    }}>
        <h1>COUNTER-3</h1>
        <h2>My Age: {data.age}</h2>
        <h2>My Sibling: {data.sibling}</h2>
        
        <button onClick={()=>{
            handleData("age")
        }}>
            Get Older
        </button>
        <button onClick={()=>{
            handleData("sibling")
        }}>
            Get more Sibling
        </button>
        <button onClick={decreaseCount}>- Main Count</button>

    </div>    
    )
}

export default Counter3