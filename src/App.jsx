// Импортируем компоненты.
import Header from "./components/Header.jsx";

import StudentList from "./components/StudentList.jsx";

import Footer from "./components/Footer.jsx";


// Импортируем данные студентов.
import { students } from "./data/students.js";


// Подключаем стили.
import "./App.css";


// Главный компонент приложения.
function App() {

  // Получаем количество студентов.
  const studentsCount = students.length;

  return (
      <div className="app">

            {/* Шапка */}
        <Header />

        {/* Основная часть */}
        <main className="main">

                <h2>
                    Наши студенты
                </h2>

          {/* Статистика */}
          <p className="students-count">
                    Всего студентов: {studentsCount}
                </p>

          {/* Список студентов */}
          <StudentList
              students={students}
          />

            </main>

        {/* Подвал */}
        <Footer />

        </div>
  );

}

export default App;