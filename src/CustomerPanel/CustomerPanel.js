import React, { useState } from "react";
import "./CustomerPanel.css";
import { Container } from "react-bootstrap";
import CustomerTable from "../CustomerTable/CustomerTable";

function CustomerPanel() {
    return (
        <Container>
            <br/>
            <h2>Customers Panel</h2>
            <br/>
            <CustomerTable />
        </Container>
    )
}

export default CustomerPanel;