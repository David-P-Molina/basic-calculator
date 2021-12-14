function App() {
    const operators = ["/", "*", "+", "-","DEL"]
    const digits = [1,2,3,4,5,6,7,8,9,0]
    const generateButtons = (array) => {
       return array.map((el) => <button key={el}>{el}</button>)
    }
    
  return (
    <div className="App">
      <h1>Basic Calculator</h1>
        <div className="calculator">
            <div className="display">
                <span>(0)</span> 0
            </div>
                <div className="operators">
                    {generateButtons(operators)}

                </div>
                <div className="digits">
                    {generateButtons(digits)}
                    <button>.</button>
                    <button>=</button>
                </div>
        </div>
    </div>
  );
}

export default App;