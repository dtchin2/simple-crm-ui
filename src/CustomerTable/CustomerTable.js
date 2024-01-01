import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./CustomerTable.css";
import axios from "axios";

function CustomerTable() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [searchByPhone, setsearchByPhone] = useState(false);
  const [searchByEmail, setsearchByEmail] = useState(false);
  const [searchInputVal, setSearchInputVal] = useState('')
  const url = 'http://localhost:8080/api/customer';

  function showSearchByEmailInput() {
    setsearchByEmail(true);
    setsearchByPhone(false);
  }
  
  function showSearchByPhoneInput() {
    setsearchByEmail(false);
    setsearchByPhone(true);
  }

  function searchForCustomers(){
    if(searchInputVal.toString().length === 0){
        alert("Search Field Cannot Be Empty");
    }else {
        try {
            fetch(url, {email: searchInputVal})
            .then(response => response.json())
            .then(res => console.log("Data: " + res))
        }catch(error){
            console.log(error.message)
        }
    }
  }

  useEffect(() => {
    try {
      fetch(url).then(response => response.json())
      .then(data => setCustomers(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const RenderTableData = () => {
    return customers?.map((c) => (
      <tr>
        <td>{c.customerID}</td>
        <td>{c.customerFirstName}</td>
        <td>{c.customerMiddleInitial}</td>
        <td>{c.customerLastName}</td>
        <td>{c.customerEmail}</td>
        <td>{c.customerPhone}</td>
        <td>
          {c.customerStreetAddress +
            " " +
            c.customerStreetAddress2 +
            " " +
            c.customerCity +
            " " +
            c.customerStateAbbreviation +
            " " +
            c.customerZipCode}
        </td>
        <td>{c.customerContactPreference}</td>
        <td>
          <Button>E</Button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {/* Create Search Bar for Table */}
          <h6>Search Customer By:</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="searchBy"
              id="searchByEmailRadio"
              onClick={showSearchByEmailInput}
            />
            <label class="form-check-label" for="searchByEmailRadio">
              Email
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="searchBy"
              id="searchByPhoneRadio"
              onClick={showSearchByPhoneInput}
            />
            <label class="form-check-label" for="searchByPhoneRadio">
              Phone
            </label>
          </div>
          {searchByEmail && (
            <div>
              <input type="email" placeholder="Email" class="search_by_input" onChange={e => setSearchInputVal(e.target.value)} />
              <Button onClick={searchForCustomers}>Search</Button>
            </div>
          )}
          {searchByPhone && (
            <div>
              <input type="number" placeholder="Phone Number" class="search_by_input" onChange={e => setSearchInputVal(e.target.value)}/>
              <Button onClick={searchForCustomers}>Search</Button>
            </div>
          )}
          <br/>
          <hr/>
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
            <tbody>{<RenderTableData />}</tbody>
          </Table>
        </div>
      )}
    </div>
  );
}



export default CustomerTable;
