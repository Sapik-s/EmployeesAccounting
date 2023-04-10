import './search-panel.css';

const SearchPanel = ({onSearch}) => {
    function getValueEmployees(e) {
        onSearch(e.target.value);
    }
    return (
        <input type="text"
               onChange={getValueEmployees}
               className="form-control search-input"
               placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;