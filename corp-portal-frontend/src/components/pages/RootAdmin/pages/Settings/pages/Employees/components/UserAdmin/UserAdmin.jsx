import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import './UserAdmin.css'
import EmployeeDepartment from "./components/EmployeeDepartment";

const UserAdmin = () => {
    let [employee, setEmployee] = useState({});
    let [initialEmployee, setInitialEmployee] = useState({})
    const [departmentStructure, setDepartmentStructure] = useState([]);
    const { userId } = useParams();
    let navigate = useNavigate();

    const loadUserDataById = async (userId) => {
        try {
            if (userId === 'new') {
                return;
            }
            const response = await axios.get(`http://localhost:8080/api/v1/employee/${userId}`);
            setEmployee(response.data);
            setInitialEmployee(response.data);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    const loadDepartmentStructure = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/department/tree`);
            setDepartmentStructure(response.data);
        } catch (error) {
            console.log('Error loading department data: ', error);
        }
    }

    // Вызываем метод при монтировании компонента
    useEffect(() => {
        if (userId) {
            loadUserDataById(userId);
        }

        loadDepartmentStructure();
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (employee.id !== '') {
                // Сбор измененных полей
                const changedFields = Object.keys(employee).reduce((acc, key) => {
                    if (employee[key] !== initialEmployee[key]) {
                        acc[key] = employee[key];
                    }
                    return acc;
                }, {});

                if (Object.keys(changedFields).length > 0) {
                    await axios.patch(`http://localhost:8080/api/v1/employee/${employee.id}`, changedFields);
                }
                // await axios.put(`http://localhost:8080/api/v1/employee`, {employee});
            } else {
                let response = await axios.post(`http://localhost:8080/api/v1/employee`, {employee});
                setEmployee(response.data);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    // Универсальный обработчик изменений
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    return (
        <form className="form-user" onSubmit={handleSubmit}>
            <button onClick={() => navigate(-1)}>Назад</button>
            {employee && employee.id !== '' && (<label className="form-user-label">
                    <span>ID:</span>
                    <input name="id" readOnly type="text" value={employee ? employee.id : ''} onChange={handleInputChange}/>
                </label>
            )}
            <label className="form-user-label">
                <span>Имя:</span>
                <input name="firstName" type="text" value={employee ? employee.firstName : ''} onChange={handleInputChange}/>
            </label>
            <label className="form-user-label">
                <span>Фамилия: </span>
                <input name="lastName" type="text" value={employee ? employee.lastName : ''} onChange={handleInputChange}/>
            </label>
            <label className="form-user-label">
                <span>Отчество: </span>
                <input name="secondName" type="text" value={employee ? employee.secondName : ''} onChange={handleInputChange}/>
            </label>
            <label className="form-user-label">
                <span>Email: </span>
                <input name="email" type="email" value={employee ? employee.email : ''} onChange={handleInputChange}/>
            </label>
            <label className="form-user-label">
                <span>Структура подразделений: </span>
                {employee && employee.id !== undefined && (<EmployeeDepartment
                    departmentJson={departmentStructure}
                    employeeDepartmentId={employee.department.id}
                />)}
            </label>
            <label className="form-user-label">
                <span>Компания: </span>
                <input name="company" type="text" value={employee && employee.company ? employee.company.name : ''} onChange={handleInputChange}/>
            </label>
            <label className="form-user-label">
                <span>Подразделение: </span>
                <input name="department" type="text" value={employee && employee.department ? employee.department.name : ''} onChange={handleInputChange}/>
            </label>
            <button className="form-user-button" type="submit">Сохранить</button>
        </form>
    );
};

export default UserAdmin;