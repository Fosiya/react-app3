import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import OrderForm from './pages/OrderForm';
import AllOrders from './pages/AllOrders';


function App() {

  return (
    <BrowserRouter>
      <header><h1>RESTAURANT LINI</h1>
      <div>
      <Link to='/'>PLACE ORDER</Link>
      <Link to='orders'>VIEW ALL ORDERS</Link>
      </div>
      </header>
    <Routes>
      <Route path='/' element={ <OrderForm/> }></Route>
      <Route path='orders' element={ <AllOrders/> }></Route>
    </Routes>  
    </BrowserRouter>

    
  );
}

export default App;
