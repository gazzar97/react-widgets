import React ,{ useState } from 'react'
import styles from '../styles.module.css'




export default function Eduapps_numericInput(props) {
    let x = {
      flexDirection:'row'
    };
    if(props.language === "arabic")
    {
      x = {flexDirection:'row-reverse'}
    }
    const [counter, setCounter] = useState(0);
    let onChange = (event) => {
      let current_value = parseFloat  (event.target.value);
      setCounter(current_value);
      
    }
  
    return (
    <div className = {styles.parent_container} style = {x}>
      <div className = {styles.custom_input}>
        <input  type = "number" onChange = {onChange} value = {counter}/>
      </div>
      <div className = {styles.btns}> 
          <button onClick = {() => {setCounter(counter + 1) }} className = {styles.quantity_up_custom} >+</button>
          <button onClick = {() => setCounter(counter - 1)} className = {styles.quantity_down_custom}>-</button>
      </div>
    </div>
    )
  }
