import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
    </div>
  );
}

export default App;
