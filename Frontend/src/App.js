import './App.css';
import ForgotPass from './Screens/ForgotPass';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App  h-screen w-screen overflow-x-hidden" >
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgotpassword' element={<ForgotPass/>}/>
      </Routes>
    </div>
  );
}

export default App;
