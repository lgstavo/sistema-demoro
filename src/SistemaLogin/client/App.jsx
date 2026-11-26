import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Cuidado: Verifique se o arquivo é Login.jsx ou login.jsx
import Register from './pages/Register';
import Home from './pages/Home';
import Index from './pages/Index';
import MoradorPage from './pages/moradorPage';
import Casa from './pages/Casa';

// --- FALTAVAM ESSES DOIS IMPORTS ---
import Admin from './pages/Admin'; 
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/casa" element={<Casa/>} />
        <Route path="/morador" element={<MoradorPage />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;