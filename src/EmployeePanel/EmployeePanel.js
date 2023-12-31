import React, { useState } from "react";
import EmployeeTable from "../EmployeeTable/EmployeeTable";

function EmployeePanel(){

    return (
        <div>
            <br/>
            <h3>Employee Panel</h3>
            <br/>
            <EmployeeTable />
        </div>
    )
}

export default EmployeePanel;