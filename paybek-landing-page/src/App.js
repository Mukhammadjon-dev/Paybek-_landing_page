import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
}

export default App;
