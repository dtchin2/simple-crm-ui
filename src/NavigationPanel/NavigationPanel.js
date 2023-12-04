import React, { useState } from "react";
import './NavigationPanel.css';
import { Button, ButtonGroup, Nav } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePanel from "../HomePanel/HomePanel";
import CustomerPanel from "../CustomerPanel/CustomerPanel";

function NavigationPanel() {
    return (
        <Router>
            <div className="nav_panel">
                <ul>
                    <li>
                        <Link to="/" className="menu_btn">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/customers" className="menu_btn">
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link to="/employees" className="menu_btn">
                            Employees
                        </Link>
                    </li>
                    <li>
                        <Link to="/messaging" className="menu_btn">
                            Messaging
                        </Link>
                    </li>
                    <li>
                        <Link to="/leadmanagement" className="menu_btn">
                            Lead Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/reporting" className="menu_btn">
                            Reporting and Data
                        </Link>
                    </li>
                    <Link to="/marketingautomation" className="menu_btn">
                        Marketing Automation
                    </Link>
                    <li>
                        <Link to="/documents" className="menu_btn">
                            Documents
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="menu_btn">
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<HomePanel />}></Route>
                <Route path="/customers" element={<CustomerPanel />}></Route>
            </Routes>
        </Router>
    )
}

export default NavigationPanel;