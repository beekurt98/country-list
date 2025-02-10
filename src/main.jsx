import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>    
    <App />
  </Router>
)
