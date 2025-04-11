import React, { useState } from "react";
import './Counter.css'
import { FaPlus } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";



const Counter = () => {

    const [count,setCount]=useState(0)
    const [limit1,setLimit] = useState(0)

    const minus = () => {
        if (count >0){
        setCount((prev) => prev -1)
        }
    }

    const plus = () =>{
        if (count < 10000 && count < limit1 ){
        setCount((prev) => prev +1)
        }
       
    }

    const reset = () =>{
        setCount(0)
    }

    const start = (e) => {
        if (e.target.value < 10000 ){
        setCount(parseInt(e.target.value))
        }

    }

    const limit = (e) => {
        if (e.target.value){
            setLimit(parseInt(e.target.value))
            console.log(e.target.value)
        }

    }

return (
    <>

    <div className="main">
      <div className="counter">
        <header className="header">
            <div className="heading">
                <h1 className="heading1">Counter</h1>
            </div>

            <div className="buttons ">
                <label>Set Limit</label>
                <input onChange={limit}  className="input-is" type="number"/>
                <label>start From</label>
                <input onChange={start}  className="input-is" type="number"/>
            </div>

         </header>


        <div className="section-count">
            <div className="count">{count}</div>
        </div>

        <div className="button-container">
            <div className="buttons-container">           
                 <div onClick={minus} className="button button-minus">
                        <FaMinus size='35' className="icons" />
                 </div>
                 <div onClick={reset} className="button button-reset">
                       <RiResetLeftLine size='35'className="icons" />
                 </div>
                  <div onClick={plus} className="button button-plus">
                       <FaPlus size='35'  className="icons"/>
                 </div>
            </div>
        </div>
      </div>
    </div>
    </>
)


}

export default Counter