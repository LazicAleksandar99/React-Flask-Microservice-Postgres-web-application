import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>      
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact/>
            <Route path="/home" element={<Home /> }/>            
            <Route path="/products" element={<Products /> }/>
          </Route>
        </Routes>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
