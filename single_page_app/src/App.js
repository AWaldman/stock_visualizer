import logo from './logo.svg';
import './App.css';
import APIService from "./services/APIService.js";

function App() {
  // APIService.getTickerData('AAPL');
  function getTickerData(ticker) {
    let data = APIService.getTickerData(ticker);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wow amazing ticker data
        </p>
        <form>
          Ticker Symbol:
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
      
    </div>
  );
}

export default App;
