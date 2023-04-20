import './employees-add-form.css';
import {useState} from "react";

const EmployeesAddForm = ({onAddUser}) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    function onAddName(event) {
        setName(event.target.value);
    }

    function onAddSalary(event) {
        setSalary(event.target.value);
    }

    function onAddNewUser(event) {
        event.preventDefault();
        console.log(name);
        if (!name <= 0 && !salary <= 0 && name.trim() !== '') {
            const newUser = {
                name: name,
                salary: salary,
                increase: false,
                star: false,
                id: Math.round(Math.random() * (100 - 1) + 1)
            };
            onAddUser(newUser);
        }
        setSalary("");
        setName("");
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       onChange={onAddName}
                       value={name}
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"/>
                <input type="number"
                       value={salary}
                       onChange={onAddSalary}
                       className="form-control new-post-label"
                       placeholder="З/П в $?"/>

                <button type="submit"
                        onClick={onAddNewUser}
                        className="btn btn-outline-light">Добавить
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;