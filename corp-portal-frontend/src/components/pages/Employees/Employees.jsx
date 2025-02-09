import './Employees.css'

function Employees() {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Login</th>
                    <th scope="col">Email</th>
                    <th scope="col">Компания</th>
                    <th scope="col">Подразделение</th>
                    <th scope="col">Активен</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>shevelev_ap</td>
                    <td>shevelev_ap@email.ru</td>
                    <td>Интер РАО ЦР</td>
                    <td>Управление чего то там</td>
                    <td>true</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>shevelev_ap2</td>
                    <td>shevelev_ap2@email.ru</td>
                    <td>Интер РАО ЦР</td>
                    <td>Управление чего то там</td>
                    <td>true</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>shevelev_ap3</td>
                    <td>shevelev_ap3@email.ru</td>
                    <td>Интер РАО ЦР</td>
                    <td>Управление чего то там</td>
                    <td>true</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>shevelev_ap4</td>
                    <td>shevelev_ap4@email.ru</td>
                    <td>Интер РАО ЦР</td>
                    <td>Управление чего то там</td>
                    <td>true</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Employees;