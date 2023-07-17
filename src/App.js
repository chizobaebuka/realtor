import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Profile from './Pages/Profile.jsx';
import Signin from './Pages/Signin.jsx';
import SignUp from './Pages/SignUp.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import Offers from './Pages/Offers.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
