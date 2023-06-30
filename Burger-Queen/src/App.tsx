import './App.css'
import Mainview from './components/mainview/Mainview';
import Login from './components/login/Login';
import Waiterorder from './components/waiterorder/Waiterorder';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waiterorder" element={<Waiterorder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
