import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import './UserAdmin.css'
import EmployeeDepartment from "./components/EmployeeDepartment";

const UserAdmin = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');

    const { userId } = useParams();
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const employeeDepartmentId = 5;


    const loadUserDataById = async (userId) => {
        try {
            if (userId === 'new') {
                return;
            }
            const response = await axios.get(`http://localhost:8080/api/v1/employee/${userId}`);
            const userData = response.data;

            // Устанавливаем данные в состояние формы
            setId(userData.id);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setSecondName(userData.secondName);
            setEmail(userData.email);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    const loadDepartmentData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/department/tree`);
            setData(response.data);
        } catch (error) {
            console.log('Error loading department data: ', error);
        }
    }

    // Вызываем метод при монтировании компонента
    useEffect(() => {
        if (userId) {
            loadUserDataById(userId);
        }

        loadDepartmentData();
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = null;
        try {
            if (id !== '') {
                response = await axios.put(`http://localhost:8080/api/v1/employee`, {
                    id,
                    firstName,
                    lastName,
                    secondName,
                    email,
                });
            } else {
                response = await axios.post(`http://localhost:8080/api/v1/employee`, {
                    firstName,
                    lastName,
                    secondName,
                    email,
                });
                setId(response.data.id);
            }

            console.log('User registered successfully:', response.data);
            // можно обработать успешный ответ и, например, перенаправить пользователя на другую страницу
        } catch (error) {
            console.error('Error registering user:', error);
            // можно обработать ошибку и показать сообщение пользователю
        }
    };

    return (
        <form className="form-user" onSubmit={handleSubmit}>
            <button onClick={() => navigate(-1)}>Назад</button>
            {id !== '' && (<label className="form-user-label">
                    <span>ID:</span>
                    <input readOnly type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
            )}
            <label className="form-user-label">
                <span>Имя:</span>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label className="form-user-label">
            <span>Фамилия: </span>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <label className="form-user-label">
            <span>Отчество: </span>
            <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>
        </label>
        <label className="form-user-label">
            <span>Email: </span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className="form-user-label">
            <span>Структура подразделений: </span>
            <EmployeeDepartment
                departmentJson={data}
                employeeDepartmentId={employeeDepartmentId}
            />
        </label>
        <button className="form-user-button" type="submit">Сохранить</button>
    </form>
)
    ;
};

export default UserAdmin;