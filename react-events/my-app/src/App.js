import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(`${text}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton
            onCustomClick={handleCustomClick}
            text="Green"
            className="green-btn"
          />
          <CustomButton
            onCustomClick={handleCustomClick}
            text="Red"
            className="red-btn"
          />
          <CustomButton
            onCustomClick={handleCustomClick}
            text="Blue"
            className="blue-btn"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
