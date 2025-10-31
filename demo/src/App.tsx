import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileFrame from './components/MobileFrame';
import Hero from './pages/Hero';
import PersonaSelect from './pages/PersonaSelect';
import AppDemo from './pages/AppDemo';
import Complete from './pages/Complete';

export default function App() {
  return (
    <BrowserRouter basename="/Woorijib">
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/select" element={<PersonaSelect />} />
          <Route path="/demo/:personaId" element={<AppDemo />} />
          <Route path="/complete/:personaId" element={<Complete />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}
