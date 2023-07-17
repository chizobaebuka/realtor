import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Profile from './Pages/Profile.jsx';
import Signin from './Pages/Signin.jsx';
import SignUp from './Pages/SignUp.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import Offers from './Pages/Offers.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/offers' element={<Offers/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
