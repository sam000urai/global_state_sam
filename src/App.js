import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage'
import SecondPage from './pages/SecondPage';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<TopPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
export default App;