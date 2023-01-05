import './App.css';
import {useState, useEffect} from 'react'

function App() {
  return (
   <>
    <div className="page-wrapper">
      <div className="container">
          <div className="row">
              <div className="col">
                <div className="screen"></div>
                  <div className="btn light-gray" onClick={reset}>AC</div>
                  <div className="btn light-gray" onClick={percent}>%</div>
                  <div className="btn light-gray" onClick={minusPlus}>+/-</div>
                  <div className="btn orange" onClick={operatorType}>/</div>
                  <div className="btn" onClick={inputNum}>7</div>
                  <div className="btn" onClick={inputNum}>8</div>
                  <div className="btn" onClick={inputNum}>9</div>
                  <div className="btn orange" onClick={operatorType}>X</div>
                  <div className="btn" onClick={inputNum}>4</div>
                  <div className="btn" onClick={inputNum}>5</div>
                  <div className="btn" onClick={inputNum}>6</div>
                  <div className="btn orange" onClick={operatorType}>+</div>
                  <div className="btn" onClick={inputNum}>1</div>
                  <div className="btn" onClick={inputNum}>2</div>
                  <div className="btn" onClick={inputNum}>3</div>
                  <div className="btn orange" onClick={operatorType}>-</div>
                  <div className="btn" onClick={inputNum}>0</div>
                  <div className="btn" onClick={inputNum}>.</div>
                  <div className="btn" onClick={equals}>=</div>
              </div>{/* END OF COL */}
          </div>{/* END OF ROW */}
      </div> {/* END OF CONTAINER */} 
    </div>{/* END OF PAGE WRAPPER */}
   </>
  );
}

export default App;
