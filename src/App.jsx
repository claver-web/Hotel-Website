import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Rooms from './pages/Rooms';
import Layout from './components/Layout';
import RoomDetails from './components/rooms/DetailsOfRooms';
import Services from './pages/Services';
import GalleryPage from './pages/GalleryPage';
import AboutUs from './pages/AboutUs';
import AuthPage from './pages/userLoginPage';
import AuthSignPage from './pages/Usersign';

import BookingProvider from './Provider/BookingProvider';
import AuthProvider from './Provider/AuthProvider';

function App() {

  return (
  <BrowserRouter>
    <AuthProvider>
    <BookingProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path='/booking' element={<Services />} />
          <Route path='/events' element={<GalleryPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/login' element={<AuthPage />} />
          <Route path='/signIn' element={<AuthSignPage />} />

        </Route>
      </Routes>
    </BookingProvider>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App
