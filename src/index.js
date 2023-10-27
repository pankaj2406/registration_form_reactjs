import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Myform from "./Myform";
import Home from "./Home";
import Login from './Login';
import List from './List';
import EditUser from './update';

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
          <Route path="Myform" element={<Myform />} />
          <Route path="Login" element={<Login />} />
          <Route path="list" element={<List />} />
          <Route path="update/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);