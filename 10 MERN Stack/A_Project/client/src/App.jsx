// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';

// Import page components (create these files)
import Gloves from './Pages/Gloves.jsx';
import Protection from './Pages/Protection.jsx';
import Coaching from './Pages/Coaching.jsx';
import Fitness from './Pages/Fitness.jsx';
import Footwear from './Pages/Footwear.jsx';
import Clothing from './Pages/Clothing.jsx';
import PunchBags from './Pages/PunchBags.jsx';
import BoxingRings from './Pages/BoxingRings.jsx';
import Accessories from './Pages/Accessories.jsx';
import Sale from './Pages/Sale.jsx';
import Brands from './Pages/Brands.jsx';
import Custom from './Pages/Custom.jsx';
import Account from './Pages/Account.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Search from './Pages/Search.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
          <div className="pt-[170px] lg:pt-[210px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gloves" element={<Gloves />} />
            <Route path="/gloves/:subcategory" element={<Gloves />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/protection/:subcategory" element={<Protection />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coaching/:subcategory" element={<Coaching />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/fitness/:subcategory" element={<Fitness />} />
            <Route path="/footwear" element={<Footwear />} />
            <Route path="/footwear/:subcategory" element={<Footwear />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/clothing/:subcategory" element={<Clothing />} />
            <Route path="/punch-bags" element={<PunchBags />} />
            <Route path="/bags/:subcategory" element={<PunchBags />} />
            <Route path="/boxing-rings" element={<BoxingRings />} />
            <Route path="/rings/:subcategory" element={<BoxingRings />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/accessories/:subcategory" element={<Accessories />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/sale/:subcategory" element={<Sale />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:subcategory" element={<Brands />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/custom/:subcategory" element={<Custom />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
 
          </Routes>
        </div>
      </div>
    </Router>
  );
}