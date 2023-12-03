import React, { useState } from "react";
import "./Dashboard.css";
import { Button } from "react-bootstrap";
import EmployeePanel from "../EmployeePanel/EmployeePanel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePanel from "../HomePanel/HomePanel";

function Dashboard() {
  return (
    <Router>
      <div>
        <div className="container-fluid sidebar_nav">
          <ul class="nav flex-column">
            <li class="nav-item nav_btns">
              <Link to="/">
                Home
              </Link>
            </li>
            <li class="nav-item nav_btns">
              <Link to="/employee">
                Employees
              </Link>
            </li>
            <li class="nav-item nav_btns">
              <Link to="customer">
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
            <Route path="/" element={<HomePanel/>}></Route>
            <Route path="/employee" element={<EmployeePanel/>}></Route>
          </Routes>
    </Router>
  );
}

export default Dashboard;
