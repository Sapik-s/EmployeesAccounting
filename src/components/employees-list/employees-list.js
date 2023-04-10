import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onIncrease, onStar}) => {

    const elements = data.map(i => {
        return (
            <EmployeesListItem
                key={i.id}
                {...i}
                onDelete={() => onDelete(i.id)}

                starState={i.star}
                increaseState={i.increase}

                onStar={() => onStar(!i.star, i.id)}
                onIncrease={() => onIncrease(!i.increase, i.id)}/>
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;