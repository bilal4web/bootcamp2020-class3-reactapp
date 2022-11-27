import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  let [islet,setlet]=useState(true);
  let [temp,setTemp]=useState(22);

    const ToogleLight=()=>{
      setlet(!islet);

    }

    return(

        <div className={`room ${islet ? "lit": "dark"}`}>
          <p> The Room is {islet ? "Lit": "Dark"}</p>
          <p>{islet?"Wake up its Morning": "Go to bed Its sleep time"}</p>


          <p>Temperature:{temp}</p>
         
            <br></br>
            <button onClick={ToogleLight}>Toggle Light</button>

            <br></br>

            <button onClick={()=>{
              setlet(!islet)      
            }}>Sleep/Wakeup</button>


            <br></br>

            <button onClick={()=>{
              setlet(true)
                
                }}>Turn On</button>
            <button onClick={()=>{
              setlet(false)
                }}>Turn Off</button>

                <br></br>

                <button onClick={()=>setTemp(++temp)}>Increase Temp</button>
                <button onClick={()=>setTemp(--temp)}>Decrease Temp</button>


            
        </div>

        

    );
}

ReactDOM.render(<Room />, document.getElementById('root'));