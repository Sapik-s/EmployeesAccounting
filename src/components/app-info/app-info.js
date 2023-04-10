import "./app-info.css";

const AppInfo = ({employeesSum, starSum}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesSum}</h2>
            <h2>Премию получат: {starSum}</h2>
        </div>
    )
}

export default AppInfo;