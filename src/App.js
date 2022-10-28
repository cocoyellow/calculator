import {useState} from "react";


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const signs = ['+', '-', '*', '/', '=', '.', '%', '+/-'];

  const updateCalc = value =>{
    if(
      signs.includes(value) && calc == '' ||
      signs.includes(value) && signs.includes(calc.slice(-1)
      )
    ){
return;
    }

    setCalc(calc + value);

    if(!signs.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const delKey = () => {
    if(calc == '') {return;}
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const acKey = () =>{
    if(calc == ''){return;}
    const value = '';
    setCalc(value);
  }

  const createDigitsFxn = () => {
    const digits = []
    for (let i =9; i > 0; i--){
      digits.push(
      <button 
      onClick={()=> updateCalc(i.toString())}
      key={i}>{i}
      </button>
      )
    }
    return digits;
  }


  return (

    <div className="App">
    <div className="calculator">
        <div className="display">
        {result?<span></span> :''} {calc || "0"}

        </div>
    <div className="specialCharacters">
     
        <button onClick={acKey} >AC</button>
        <button onClick={()=> updateCalc('+/-')}>+/-</button>
        <button onClick={()=> updateCalc('%')}>%</button>
        <button onClick={()=> updateCalc('/')}>/</button>
      
        
        <button onClick={()=> updateCalc('*')}>x</button>
        <button onClick={()=> updateCalc('-')}>-</button>
        <button onClick={()=> updateCalc('+')}>+</button>
        <button onClick={calculate}>=</button>
      
    
    </div>
       
      <div className="digits">

        <button>{createDigitsFxn()}</button>  
        <div className="otherKeys">
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc('.')}>.</button>
        <button onClick={delKey}>DEL</button>
        </div>
        
      </div>
    </div>                                                                                                                         
    </div>
  );
}

export default App;
