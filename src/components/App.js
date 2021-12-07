import React from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, applyMemory, clearMemory } from '../actions';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const handleApplyNumber = (e) => {
    dispatch(applyNumber(Number(e.target.value)));
    e.target.value = 1 ? console.log('worked') : console.log('bust')
    console.log('applied')
  };

  const handleChangeOperation = (e) => {
    dispatch(changeOperation(e.target.value))
    console.log('op changed')

  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
    console.log('cleared')
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
    console.log('mem set');
  }
  
  const handleApplyMemory = () => {
    dispatch(applyMemory())
  }
 
  const handleClearMemory = () => {
    dispatch(clearMemory())
  }
 
 
  
  

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMemory} />
              <CalcButton value={"MR"} onClick={handleApplyMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber} />
              <CalcButton value={3} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber} />
              <CalcButton value={5} onClick={handleApplyNumber} />
              <CalcButton value={6} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber} />
              <CalcButton value={8} onClick={handleApplyNumber} />
              <CalcButton value={9} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleChangeOperation} />
              <CalcButton value={"*"} onClick={handleChangeOperation} />
              <CalcButton value={"-"} onClick={handleChangeOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
