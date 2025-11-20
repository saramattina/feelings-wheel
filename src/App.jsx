import { Route, Routes } from 'react-router';
import FeelingsWheel from "./FeelingsWheel/FeelingsWheel.jsx";
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import EmotionalCheckIn from './EmotionalCheckIn/EmotionalCheckIn.jsx';
import Resources from './Resources/Resources.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FeelingsWheel />} />
        <Route path="/emotional-checkin" element={<EmotionalCheckIn />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
