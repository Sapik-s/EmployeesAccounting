import './search-panel.css';

const SearchPanel = ({onSearch}) => {
    function getValueEmployees(e) {
        let nameValue = e.target.value.toLowerCase().trim();
        onSearch(nameValue);
    }
    return (
        <input type="text"
               onChange={getValueEmployees}
               className="form-control search-input"
               placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;