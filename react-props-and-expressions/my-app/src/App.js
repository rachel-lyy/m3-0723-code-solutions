import logo from './logo.svg';
import './App.css';

import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="I" className="red-btn" />
          <CustomButton text="know" className="green-btn" />
          <CustomButton text="React!" className="blue-btn" />
        </div>
      </header>
    </div>
  );
}

export default App;
