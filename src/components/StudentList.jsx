// Импортируем компонент карточки.
import StudentCard from "./StudentCard.jsx";


// Компонент получает массив students.
//
// Его задача — отображать список студентов.

function StudentList({ students }) {

    // Если массив пуст, показываем сообщение.
    if (students.length === 0) {

        return (
            <p className="empty-message">
                Список студентов пока пуст.
            </p>
        );

    }

    // Если студенты есть, отображаем карточки.
    return (
        <div className="students-container">

            {students.map((student) => (

                <StudentCard
                    key={student.id}
                    student={student}
                />

            ))}

        </div>
    );

}

export default StudentList;