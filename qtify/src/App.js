import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Nav'
import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/album' element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
