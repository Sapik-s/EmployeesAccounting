import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, starState, increaseState, onIncrease, onStar}) => {

    /*On click Favourite*/
    function onFavouriteEmployees() {
        onIncrease();
    }
    let classActiveIncrease = increaseState ? ' increase' : '';

    function onStarStateChange() {
        onStar();
    }
    let setStarActive = starState ? ' like' : '';

    return (
        <li className={`list-group-item d-flex justify-content-between  ${classActiveIncrease} ${setStarActive}`}>
            <span className="list-group-item-label" onClick={onStarStateChange}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        onClick={onFavouriteEmployees}
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;