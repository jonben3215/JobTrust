import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Signup from './components/Signup/signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
