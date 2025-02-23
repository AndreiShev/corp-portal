import {useEffect, useState} from "react";
import DepartmentStructure from "./DepartmentStructure";

function EmployeeDepartment(args) {
    const [selectedId, setSelectedId] = useState(args.employeeDepartmentId);

    useEffect(() => {
        // При загрузке страницы устанавливаем текущее подразделение сотрудника
        setSelectedId(args.employeeDepartmentId);
    }, [args.employeeDepartmentId]);


    return (
        <div className="user-department">
            <DepartmentStructure
                data={args.departmentJson}
                selectedId={selectedId}
                onSelect={setSelectedId}
            />
        </div>
    );
}

export default EmployeeDepartment;