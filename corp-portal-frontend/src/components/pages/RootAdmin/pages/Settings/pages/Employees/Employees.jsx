import './Employees.css'
import EmployeeTable from "./components/EmployeeTable";

function Employees() {
    return (
        <div>
            <h2>Список пользователей</h2>
            <EmployeeTable />
        </div>
    );
}

export default Employees;