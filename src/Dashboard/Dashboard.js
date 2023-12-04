import React, { useState } from "react";
import "./Dashboard.css";
import { Button } from "react-bootstrap";
import EmployeePanel from "../EmployeePanel/EmployeePanel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePanel from "../HomePanel/HomePanel";
import CustomerPanel from "../CustomerPanel/CustomerPanel";
import NavigationPanel from "../NavigationPanel/NavigationPanel";

function Dashboard() {
  return (
   <div>
    <NavigationPanel />
   </div>
  );
}

export default Dashboard;
