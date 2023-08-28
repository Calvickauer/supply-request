import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Request from './Request';
import About from './About';
import Display from './Display';
import DisplayOrder from './DisplayOrder';
import Home from './Home';
import Order from './Order';
import LeftSidebarNavbar from './Sidebar';





function App() {
  const [display, setDisplay] = useState();
  const [orderTable, setOrderTable] = useState([]);
  const [order, setOrder] = useState([]);


  return (
    <div className='App app-container'>
      <header className="left-component">
        <div className='sidebar'>
          <LeftSidebarNavbar />
        </div>
      </header>
      <br />
      <Router className="right-components">
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request setDisplay={setDisplay} Link={Link} orderTable={orderTable} setOrderTable={setOrderTable} />} />
          <Route path='/about' element={<About />} />
          <Route path='/lookup' element={<Order setOrder={setOrder} />} />
          <Route path='/display' element={<Display data={display} setOrder={setOrder} setDisplay={setDisplay} />} />
          <Route path='/displayorder' element={<DisplayOrder order={order} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
