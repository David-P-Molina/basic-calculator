import { useState } from 'react'

function App() {
    const [calc, setCalc] = useState("")
    const [result, setResult] = useState("")

    const ops = ['/', '*', '+', '-', '.']
    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
            ) {
                return;
            }

        setCalc(calc + value)

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }
    const calculate = () => {
        setCalc(eval(calc).toString())
    }
    const deleteLast = () => {
        if (calc == '') {
            return
        } 
        const value = calc.slice(0, -1)
        setCalc(value)
    }

    const operators = ["/", "*", "+", "-"]
    const digits = [1,2,3,4,5,6,7,8,9,0]
    const generateButtons = (array) => {
       return array.map((el) => <button key={el} onClick={() => updateCalc(el.toString())}>{el}</button>)
    }
    
  return (
    <div className="App">
      <h1>Basic Calculator</h1>
        <div className="calculator">
            <div className="display">
                { result ? <span>({result})</span> : '' } {calc || "0"}
            </div>
                <div className="operators">
                    {generateButtons(operators)}
                    <button onClick={deleteLast}>DEL</button>
                </div>
                <div className="digits">
                    {generateButtons(digits)}
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
        </div>
    </div>
  );
}

export default App;