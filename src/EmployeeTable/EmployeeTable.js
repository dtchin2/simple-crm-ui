import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function EmployeeTable() {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const url = 'http://localhost:8080/api/member';

    useEffect(() => {
        try {
            fetch(url).then(response => response.json())
            .then(data => setEmployees(data));
        }catch(error){
            console.log(error.message)
        }finally {
            setLoading(false)
        }
    }, [])

    const RenderTableData = () => {
        return employees?.map((e) => (
            <tr>
                <td>{e.teamMemberId}</td>
                <td>{e.teamMemberFName}</td>
                <td>{e.teamMemberMi}</td>
                <td>{e.teamMemberLName}</td>
                <td>{e.teamMemberEmail}</td>
                <td>{e.teamMemberPhone}</td>
                <td>{e.department.departmentName}</td>
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
                <Table striped>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>MI</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{<RenderTableData/>}</tbody>
            </Table>
            )}
        </div>
    )
}

export default EmployeeTable;