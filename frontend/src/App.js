import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>      
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact/>
            <Route path="/home" element={<Home /> }/>            
            <Route path="/products" element={<Products /> }/>
            <Route path="/profile" element={<Profile /> }/>
          </Route>
          <Route path="/signin" element={<SignIn />} exact/>
          <Route path="/signup" element={<SignUp />} exact/>
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
