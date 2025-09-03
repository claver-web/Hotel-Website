import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Rooms from './pages/Rooms';
import Layout from './components/Layout';
import RoomDetails from './components/rooms/DetailsOfRooms';
import Services from './pages/Services';
import GalleryPage from './pages/GalleryPage';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path='/booking' element={<Services />} />
          <Route path='/events' element={<GalleryPage />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
