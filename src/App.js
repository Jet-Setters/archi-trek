import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
