import './App.css';
import AppDrawer from './AppDrawer';
import { useState } from 'react';

const navLinks = ['About', 'Get Started', 'Sign In'];

function App() {
  const [link, setLinks] = useState(false);
  return (
    <div className="App">
      <AppDrawer title="Menu" onSelect={setLinks} navLinks={navLinks} />
      <h1>{link}</h1>
    </div>
  );
}

export default App;
