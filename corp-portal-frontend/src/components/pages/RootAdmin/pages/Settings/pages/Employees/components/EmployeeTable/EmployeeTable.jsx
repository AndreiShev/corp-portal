import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './EmployeeTable.css'
import {Link} from "react-router-dom";
import axios from "axios";

const initialColumns = [
    { label: 'ID', value: 'id' },
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
    { label: 'Second Name', value: 'secondName' },
    { label: 'Email', value: 'email' },
    { label: 'Department', value: 'department' },
    { label: 'Company', value: 'company' }
];

function fetchData() {
    // метод для Rest запроса к сервису core
    return new Promise((resolve) => {
        resolve(axios.get(`http://localhost:8080/api/v1/employee`));
    });
}

export default function EmployeeTable() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(initialColumns);

    useEffect(() => {
        async function loadData() {
            const response = await fetchData();
            setData(response.data.employeeResponses);
        }

        loadData();
    }, []);

    const handleAddColumn = (column) => {
        if (!columns.find(c => c.value === column.value)) {
            setColumns([...columns, column]);
        }
    };

    const handleRemoveColumn = (value) => {
        setColumns(columns.filter(column => column.value !== value));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(columns);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setColumns(items);
    };

    const activeTableCol = (event, label, value) => {
        if (event.target.checked) {
            handleAddColumn({label: label, value: value});
        } else {
            handleRemoveColumn(value);
        }
    };

    const toggleSettings = (event) => {
        let settingsElem = document.getElementById("table-settings");
        if (!settingsElem.classList.contains("active")) {
            settingsElem.classList.add("active");
        } else {
            settingsElem.classList.remove("active");
        }
    };

    return (
        <div>
            <div className="table-management-menu">
                <div className="table-management-buttons">
                    <button className="table-settings-button" onClick={(event) => toggleSettings(event)}>Настройки</button>
                    <Link className="table-create-user" to={`/admin/employees/new`}>Добавить пользователя</Link>
                </div>
            </div>
            <div className="table-settings" id="table-settings">
                <label className="item">
                    ID: <input onClick={(event) => activeTableCol(event, 'ID', 'id')} type="checkbox" name="id" defaultChecked={true}/>
                </label>
                <label className="item">
                    Имя: <input onClick={(event) => activeTableCol(event, 'First Name', 'firstName')} type="checkbox" name="firstName" defaultChecked={true}/>
                </label>
                <label className="item">
                    Фамилия: <input onClick={(event) => activeTableCol(event, 'Last Name', 'lastName')} type="checkbox" name="lastName" defaultChecked={true}/>
                </label>
                <label className="item">
                    Отчество: <input onClick={(event) => activeTableCol(event, 'Second Name', 'secondName')} type="checkbox" name="secondName" defaultChecked={true}/>
                </label>
                <label className="item">
                    Email: <input onClick={(event) => activeTableCol(event, 'Email', 'email')} type="checkbox" name="email" defaultChecked={true}/>
                </label>
                <label className="item">
                    Подразделение: <input onClick={(event) => activeTableCol(event, 'Department', 'department')} type="checkbox" name="department" defaultChecked={true}/>
                </label>
                <label className="item">
                    Компания: <input onClick={(event) => activeTableCol(event, 'Company', 'company')} type="checkbox" name="company" defaultChecked={true}/>
                </label>
            </div>
            <style>{`
                .draggable-th {
                    cursor: grab;
                    user-select: none; /* Отключает выделение текста */
                }
                .draggable-th:active {
                    cursor: grabbing;
                }
            `}</style>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <table ref={provided.innerRef} {...provided.droppableProps}>
                            <thead>
                            <tr>
                                {columns.map((column, index) => (
                                    <Draggable key={column.value} draggableId={column.value} index={index}>
                                        {(provided) => (
                                            <th
                                                className="draggable-th"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                draggable
                                            >
                                                {column.label}
                                            </th>
                                        )}
                                    </Draggable>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data.map(row => (
                                <tr key={row.id}>
                                    {columns.map(({value}) => (
                                        <td id="id" key={`${row.id}-${value}`}>
                                            {value === 'id' ? (
                                                <Link to={`/admin/employees/${row[value]}`}>{row[value]}</Link>  // Оборачиваем значение в ссылку
                                                // <Link to={`/test`}>{row[value]}</Link>  // Оборачиваем значение в ссылку
                                            ) : (
                                                row[value] || '-'  // Если не id, просто выводим значение
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </Droppable>
            </DragDropContext>

            {/* Кнопки для управления столбцами. Вынести в отдельное меню. Сделать toggle вместо click */}
        </div>
    );
}