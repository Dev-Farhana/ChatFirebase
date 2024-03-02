// import './App.css';
// import Navbar from "./components/Navbar";
// import Chatbox from "./components/Chatbox";
// import Welcome from "./components/Welcome";
// import  {auth} from "./firebase";
// import  {useAuthState} from "react-firebase-hooks/auth";

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div>
//       <Navbar />
//       { !user ? <Welcome/> : <Chatbox />}
//     </div>
//   )
// }

// export default App;
import "./App.css";
import NavBar from "./components/Navbar";
import ChatBox from "./components/Chatbox";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;