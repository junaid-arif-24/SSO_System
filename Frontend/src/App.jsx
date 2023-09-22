import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UserConcernsPage from './Pages/UserConcernsPage';
import HostingSelection from './Pages/HostingSelection';
import Dashboard from './Pages/Dashboard';
import SuccessPage from './Pages/SuccessPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/" element={<SignUp/>}/>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/concern" element={<UserConcernsPage/>}/>
        <Route exact path="/hosting" element={<HostingSelection/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route  path="/success" element={<SuccessPage/>}/>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
