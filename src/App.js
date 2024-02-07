import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home';
import Booking from './pages/BookingPage/Booking/Booking';
import Confirmation from './pages/BookingPage/Confirmation/Confirmation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='confirmation' element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
