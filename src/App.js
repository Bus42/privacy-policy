import logo from './logo.svg';
import './App.css';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App" data-testid="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PrivacyPolicy />
    </div>
  );
}

export default App;
