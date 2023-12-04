import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import './CustomerTable.css';

function CustomerTable(){
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>First Name</th>
                        <th>MI</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>S</td>
                        <td>Doe</td>
                        <td>jsdoe@aol.com</td>
                        <td>1234565555</td>
                        <td>1234 Sample Street Baltimore MD 12345</td>
                        <td><Button>E</Button><Button>D</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default CustomerTable;