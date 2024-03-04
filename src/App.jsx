import "./App.css";
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from "./pages/Chat";
import Profile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Chat /> } /> 
        <Route path="/chat" element={ <Chat /> } /> 
        <Route path="/profile" element={ <Profile/>} /> 
      </Routes>
    </Router>
  );
}
export default App;

