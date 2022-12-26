import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './pages/Profile';
import Unauthorized from './pages/Unauthorized';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div className="App">
        <Routes>      
          <Route element={<PrivateRoutes allowedRoles={["customer","creator","admin"]} />}>
            <Route path="/" element={<Home />} exact/>
            <Route path="/home" element={<Home /> }/>            
            <Route path="/products" element={<Products /> }/>
            <Route path="/profile" element={<Profile /> }/>
          </Route>
          <Route element={<PrivateRoutes allowedRoles={["creator","admin"]} />}>
            <Route  path="/add/product" element={<AddProduct /> }/>
          </Route >
          <Route path="/unauthorized" element={<Unauthorized /> }/>
          <Route path="/signin" element={<SignIn />} exact/>
          <Route path="/signup" element={<SignUp />} exact/>
          <Route path="*" element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
