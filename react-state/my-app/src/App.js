import logo from './logo.svg';
import './App.css';

import ToggleButton from './ToggleButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ToggleButton color="red" text="Btn 1" />
          <ToggleButton color="green" text="Btn 2" />
          <ToggleButton color="blue" text="Btn 3" />
        </div>
      </header>
    </div>
  );
}

export default App;
