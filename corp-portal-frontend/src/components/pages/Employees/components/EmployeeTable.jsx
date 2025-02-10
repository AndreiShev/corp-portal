import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

    return (
        <div>
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
            <div style={{ marginTop: 20 }}>
                <button onClick={() => handleAddColumn({ label: 'ID', value: 'id' })}>Добавить ID</button>
                <button onClick={() => handleAddColumn({ label: 'First Name', value: 'first_name' })}>Добавить First Name</button>
                <button onClick={() => handleAddColumn({ label: 'Last Name', value: 'last_name' })}>Добавить Last Name</button>
                <button onClick={() => handleAddColumn({ label: 'Second Name', value: 'second_name' })}>Добавить Second Name</button>
                <button onClick={() => handleAddColumn({ label: 'Email', value: 'email' })}>Добавить Email</button>
                <button onClick={() => handleAddColumn({ label: 'Department', value: 'department' })}>Добавить Department</button>
                <button onClick={() => handleAddColumn({ label: 'Company', value: 'company' })}>Добавить Company</button>

                <br />

                <button onClick={() => handleRemoveColumn('id')}>Удалить ID</button>
                <button onClick={() => handleRemoveColumn('first_name')}>Удалить First Name</button>
                <button onClick={() => handleRemoveColumn('last_name')}>Удалить Last Name</button>
                <button onClick={() => handleRemoveColumn('second_name')}>Удалить Second Name</button>
                <button onClick={() => handleRemoveColumn('email')}>Удалить Email</button>
                <button onClick={() => handleRemoveColumn('department')}>Удалить Department</button>
                <button onClick={() => handleRemoveColumn('company')}>Удалить Company</button>
            </div>
        </div>
    );
}