import { useContext, useState } from "react";
import "./App.css";
import Counter1 from "./components/UseState/Counter1";
import Counter2 from "./components/UseState/Counter2";
import Counter3 from "./components/UseState/Counter3";
import Counter4 from "./components/UseState/Counter4";
import Effect from "./components/useEffect/Effect";
import { AppContext } from "./components/useContext/ParentContext";

function App() {
  const [show, setShow] = useState(true);

  const {isDark,setIsDark} = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
          // console.log("show: ", show);
        }}
      >
        C H A N G E{" "}
      </button>
      <button onClick={()=>{
        setIsDark(!isDark)
      }}>{isDark? "Light Theme": "Black Theme"}</button>

      {!show ? (
        <>
          <Counter1 />
          <Counter2 />
          <Counter3 />
          <Counter4 />
        </>
      ) : (
        <Effect />
      )}
    </>
  );
}

export default App;
