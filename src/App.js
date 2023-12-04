import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.module.css';
import Header from "./components/Header/Header";
import Home from './components/HomePage/Home';
import Booking from './components/BookingPage/Booking/Booking';
import Confirmation from './components/BookingPage/Confirmation/Confirmation';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='confirmation' element={<Confirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
