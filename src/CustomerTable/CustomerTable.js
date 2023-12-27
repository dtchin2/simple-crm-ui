import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./CustomerTable.css";
import axios from "axios";

function CustomerTable() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const url = 'http://localhost:8080/api/customer';

  useEffect(() => {
    try {
        axios.get(url).then((response) => {setCustomers(response.data)})
    console.log(customers)
    }catch(error){
        console.log(error.message)
    }finally{
        setLoading(false)
    }
  }, [])

  const RenderTableData = () => {
    return customers?.map((c) => (
        <tr>
            <td>{c.customerID}</td>
            <td>{c.customerFirstName}</td>
            <td>{c.customerMiddleInitial}</td>
            <td>{c.customerLastName}</td>
            <td>{c.customerEmail}</td>
            <td>{c.customerPhone}</td>
            <td>{c.customerStreetAddress + " " + c.customerStreetAddress2 + " " + c.customerCity + " " + c.customerStateAbbreviation + " " + c.customerZipCode}</td>
            <td>{c.customerContactPreference}</td>
            <td><Button>E</Button></td>
        </tr>
    ))
  }

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
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
              <th>Contact Preference</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {<RenderTableData />}
          </tbody>
        </Table>
      </div>
      )}
    </div>
    
  );
}
export default CustomerTable;
