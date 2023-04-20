import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {useState} from "react";

function App() {

    const data = [
        {name: 'John S.', salary: 1000, increase: false, star: false, id: 1},
        {name: 'Alex D.', salary: 300, increase: true, star: true, id: 2},
        {name: 'Rick G.', salary: 240, increase: true, star: true, id: 3}
    ];

    const [dataState, setDataState] = useState(data);

    const onAddNewData = (newUser) => {
        const newData = [...dataState, newUser];
        setDataState(newData);
    }

    const onDeleteUser = (id) => {
        const newData = dataState.filter(i => i.id !== id);
        setDataState(newData);
    }

    const starState = useState();
    const onStarState = (state, id) => {
        const newData = dataState.map(item => id === item.id ? item.star = state : console.log('error'));
        starState[1](newData);
    }

    const increaseState = useState();
    const onIncreaseState = (state, id) => {
        const newData = dataState.map(item => id === item.id ? item.increase = state : console.log('error'));
        increaseState[1](newData);
    }

    function searchEmployees(value) {
        const newData = data.filter(i => i.name.toLowerCase().indexOf(value) > -1);
        setDataState(newData);
    }

    function onIncreaseActive(value) {
        console.log(value);
    }

    let starSum = dataState.filter(i => i.star).length;
    let employeesSum = dataState.length;
    return (
        <div className="app">
            <AppInfo employeesSum={employeesSum} starSum={starSum}/>

            <div className="search-panel">
                <SearchPanel onSearch={searchEmployees}/>
                <AppFilter increaseState={onIncreaseActive}/>
            </div>

            <EmployeesList
                data={dataState}
                onDelete={onDeleteUser}
                onStar={onStarState}
                onIncrease={onIncreaseState}/>
            <EmployeesAddForm
                onAddUser={onAddNewData}/>
        </div>
    );
}

export default App;