
import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  const user = false;
  function checkUser(){
    user ? <Navigate to="/" /> : <Login />
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" caseSensitive={false} element={<ProductList />}  />
        <Route path="/Cart" caseSensitive={false} element={<Cart />} />
        <Route path="/Login" caseSensitive={false} element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" caseSensitive={false} element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
