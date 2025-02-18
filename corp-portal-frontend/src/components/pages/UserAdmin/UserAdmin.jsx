import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const UserAdmin = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');


    const { userId } = useParams();

    // Метод для загрузки данных пользователя по id
    const loadUserData = async (userId) => {
        try {

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

    // Вызываем метод при монтировании компонента
    useEffect(() => {
        if (userId) {
            loadUserData(userId);
        }
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/employee/${userId}`, {
                id,
                firstName,
                lastName,
                secondName,
                email,
            });

            console.log('User registered successfully:', response.data);
            // можно обработать успешный ответ и, например, перенаправить пользователя на другую страницу
        } catch (error) {
            console.error('Error registering user:', error);
            // можно обработать ошибку и показать сообщение пользователю
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            </label>
            <br/>
            <label>
                Имя:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <br/>
            <label>
                Фамилия:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label>
                Отчество:
                <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br/>
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default UserAdmin;