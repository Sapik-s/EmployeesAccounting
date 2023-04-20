import "./app-filter.css";

const AppFilter = () => {

    function onAllEmployeesActive() {

    }
    function onIncreaseActive() {

    }
    function onBigMoney() {

    }
    //btn-light
    //btn-outline-light


    return (
        <div className="btn-group">
            <button type="button"
                    onClick={onAllEmployeesActive}
                    className={`btn btn-outline-light ${onAllEmployeesActive()}`}>
                    Все сотрудники
            </button>
            <button type="button"
                    onClick={onIncreaseActive}
                    className={`btn btn-outline-light ${onIncreaseActive()}`}>
                    На повышение
            </button>
            <button type="button"
                    onClick={onBigMoney}
                    className={`btn btn-outline-light ${onIncreaseActive()}`}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;