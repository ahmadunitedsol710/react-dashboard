import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/index';
import Events from './Components/Body/events'
import './App.css';

function App() {
  return (
    <div className="App container">
    <Router>
      <Routes>        
          <Route path="/" exact element={<Header/>}/>

          <Route path="/" exact element={<Header/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;