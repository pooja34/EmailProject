import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SendMail from './screens/SendMail';

function App() {
  return (
    <div className="container">
   <Routes>
     <Route  path='' element={<SignIn/>}/>
     <Route  path='mail' element={<SendMail/>}/>

   </Routes>
   <ToastContainer />

    </div>
  );
}

export default App;
