import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Maincontent from './components/Main/Maincontent'
import Navbar from './components/Navbar/Navbar'
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Table from "./components/Table";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NewLead from "./components/newLead/NewLead";

function App() {
  return (
    <>
      <Router>
        <div className='bg-gray-900 text-white mainApp'>
          <Navbar />

          <Routes>
            <Route path="/" element={<Signup />} /> 
            <Route path="/newlead" element={<Leaderboard />} /> 
           
            <Route path="/table" element={<Table />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/dashboard" element={<Maincontent/>} /> 
            <Route path="/leaderboard" element={<NewLead/>} /> 
            
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
