import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../useContext/ParentContext';

const Counter2 = () => {

    const {mainCount,isDark} = useContext(AppContext);

    const [currAge,setCurrAge] = useState(20);
    const [currSib,setCurrSib] = useState(1);
    
    const handleAge = ()=>{
        setCurrAge(currAge+1)
    }

    const handleSib = () =>{
        setCurrSib(currSib+1)
    }

    const decreaseSib = ()=>{
    if(currSib>0){
        setCurrSib(currSib-1)
    }
    }

    useEffect(()=>{
        console.log("Mount");
    },[])



  return (
    <div style={{
        border:`2px solid ${isDark? "White":"black"}`,
        padding: "20px",
        margin: "20px",
        backgroundColor: `${isDark? "black":"white"}`,
        color: `${isDark? "white":"black"}`

    }}>
        <h1>COUNTER-2</h1>
        <h3>My current age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
        <h4>Main Count: {mainCount}</h4>

        <button onClick={handleAge}>
            Get Older
        </button>
        <button onClick={handleSib}>
            Get more Sib
        </button>
        <button onClick={decreaseSib}>Decrease Siblings</button>

    </div>  
    )
}

export default Counter2