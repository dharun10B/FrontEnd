import React, { Component } from 'react';

class EmployeeDEtailsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empid: 101, empname: 'Luffy', emppost: 'Manager', empsal: 50000, empcontact: '7890', empaddress: 'Chennai' },
                { empid: 102, empname: 'Shanks', emppost: 'Developer', empsal: 40000, empcontact: '8901', empaddress: 'Mumbai' },
                { empid: 103, empname: 'Kaido', emppost: 'Designer', empsal: 35000, empcontact: '9012', empaddress: 'Delhi' },
                { empid: 104, empname: 'Zoro', emppost: 'HR', empsal: 45000, empcontact: '90123', empaddress: 'Goa' },
                { empid: 105, empname: 'Sanji', emppost: 'Developer', empsal: 42000, empcontact: '8901234', empaddress: 'Bangalore' },
                { empid: 106, empname: 'Nami', emppost: 'QA', empsal: 38000, empcontact: '9012345', empaddress: 'Pune' },
                { empid: 107, empname: 'Ussopp', emppost: 'Manager', empsal: 50000, empcontact: '7893456', empaddress: 'Chennai' },
                { empid: 108, empname: 'Chopper', emppost: 'Developer', empsal: 43000, empcontact: '8904567', empaddress: 'Delhi' },
                { empid: 109, empname: 'Nico Robin', emppost: 'Designer', empsal: 36000, empcontact: '905678', empaddress: 'Mumbai' },
                { empid: 110, empname: 'Brook', emppost: 'HR', empsal: 46000, empcontact: '6789', empaddress: 'Kolkata' }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empname}</td>
                                <td>{employee.emppost}</td>
                                <td>{employee.empsal}</td>
                                <td>{employee.empcontact}</td>
                                <td>{employee.empaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeDEtailsComp;
