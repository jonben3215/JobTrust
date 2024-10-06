import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Signup from './components/Signup/signup';
import Login from './components/Login/login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
         <Route path='login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
