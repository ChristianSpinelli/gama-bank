import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
