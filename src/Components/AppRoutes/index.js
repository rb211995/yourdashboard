import React from 'react';
import {  Route,  Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Index';
import Inventory from '../Pages/Inventory/Index';
import Orders from '../Pages/Orders/Index';
import Customers from '../Pages/Customers/Index';
import Reviews from '../Pages/Reviews/Index';

export default function AppRoutes() {
  return (
    <div className="AppRoutes">
      
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      
    </div>
  );
}
