import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './EmployeeTable.css'

const initialColumns = [
    { label: 'ID', value: 'id' },
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Second Name', value: 'second_name' },
    { label: 'Email', value: 'email' },
    { label: 'Department', value: 'department' },
    { label: 'Company', value: 'company' }
];

function fetchData() {
    // метод для Rest запроса к сервису core
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            { id: 1, first_name: 'John', last_name: 'Doe', second_name: '', email: 'john.doe@example.com', department: 'IT', company: 'Acme Corp.' },
            { id: 2, first_name: 'Jane', last_name: 'Smith', second_name: '', email: 'jane.smith@example.com', department: 'HR', company: 'Acme Corp.' },
            { id: 3, first_name: 'Peter', last_name: 'Parker', second_name: '', email: 'peter.parker@example.com', department: 'Marketing', company: 'Acme Corp.' }
        ]), 1000);
    });
}

export default function EmployeeTable() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(initialColumns);

    useEffect(() => {
        async function loadData() {
            const response = await fetchData();
            setData(response);
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

                <button className="table-settings-button" onClick={(event) => toggleSettings(event)}>Настройки</button>
            </div>
            <div className="table-settings" id="table-settings">
                <label className="item">
                    ID: <input onClick={(event) => activeTableCol(event, 'ID', 'id')} type="checkbox" name="id" defaultChecked={true}/>
                </label>
                <label className="item">
                    Имя: <input onClick={(event) => activeTableCol(event, 'First Name', 'first_name')} type="checkbox" name="first_name" defaultChecked={true}/>
                </label>
                <label className="item">
                    Фамилия: <input onClick={(event) => activeTableCol(event, 'Last Name', 'last_name')} type="checkbox" name="last_name" defaultChecked={true}/>
                </label>
                <label className="item">
                    Отчество: <input onClick={(event) => activeTableCol(event, 'Second Name', 'second_name')} type="checkbox" name="second_name" defaultChecked={true}/>
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
                                        <td id="id" key={`${row.id}-${value}`}>{row[value] || '-'}</td>
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