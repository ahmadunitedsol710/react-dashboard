import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/index';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>        
          <Route path="/" exact element={<ContactList contact={contact} setContact={setContact} local_storage_key={local_storage_key}/>}/>  
      </Routes>
    </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
