import './App.css';
import HomeNavbar from './HomeNavbar';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import HomeFooter from './components/HomeFooter';
import User from './pages/User';


function App() {
  return (
    <div>
      <div>
          <HomeNavbar/>
      </div>
        <div>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/User" element={<User/>}/>
        </Routes>
        </div>
        <div><HomeFooter/></div>
    </div>
  );
}

export default App;
