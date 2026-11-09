// Импортируем компонент статуса.
import StatusBadge from "./StatusBadge.jsx";


// Компонент отображает одного студента.
//
// Получает объект student через props.

function StudentCard({ student }) {

    return (
        <div className="student-card">

            {/* Верхняя часть карточки */}
            <div className="student-card-header">

                {/* Имя студента */}
                <h3>
                    {student.name}
                </h3>

                {/* Статус */}
                <StatusBadge
                    isActive={student.isActive}
                />

            </div>

            {/* Возраст */}
            <p>
                Возраст: {student.age}
            </p>

            {/* Учебная группа */}
            <p>
                Группа: {student.group}
            </p>

            {/* Дополнительное сообщение */}
            {student.age < 18 && (

                <p className="student-warning">
                    Несовершеннолетний студент
                </p>

            )}

        </div>
    );

}

export default StudentCard;