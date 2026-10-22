import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Colleges from './pages/Colleges';
import HowProvaWorks from './pages/HowProvaWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/how-prova-works" element={<HowProvaWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy demo routes */}
          <Route path="/services" element={<Navigate to="/how-prova-works" replace />} />
          <Route path="/institutions" element={<Navigate to="/colleges" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
