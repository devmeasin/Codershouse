import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Activate from './components/pages/Activate/Activate';
import Authenticate from './components/pages/Authenticate/Authenticate';
import Home from "./components/pages/Home/Home";
import Rooms from './components/pages/Rooms/Rooms';
import GuestRoute from './components/Routes/GuestRoute';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import SemiProtectedRoute from './components/Routes/SemiProtectedRoute';
import Navigation from "./components/Shared/Navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
          <Route path="/authenticate" element={<GuestRoute><Authenticate /></GuestRoute>} />
          <Route path="/activate" element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
          <Route path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
