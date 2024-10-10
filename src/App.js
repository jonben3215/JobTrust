import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import Main from './components/Main/main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
         <Route path='/login' element={<Login />} />
         <Route path = '/main' element ={<Main />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
