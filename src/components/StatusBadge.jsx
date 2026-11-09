// Компонент отображает статус студента.
//
// Получает один prop:
// isActive — логическое значение true или false.

function StatusBadge({ isActive }) {

    // Определяем текст статуса.
    const statusText = isActive
        ? "Активен"
        : "Пауза";

    // Определяем CSS-класс.
    const statusClass = isActive
        ? "status-badge status-active"
        : "status-badge status-inactive";

    return (
        <span className={statusClass}>

            {statusText}

        </span>
    );

}

export default StatusBadge;