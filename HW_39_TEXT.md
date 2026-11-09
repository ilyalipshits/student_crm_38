# HW_39_TEXT

Не успели разобрать 02_ReactProps_Examples_78_RU  слайд 70-78

# 1. Домашнее задание: Course Catalog

Создайте отдельный Vite + React JavaScript проект course-catalog. Срок самостоятельной работы — ориентировочно 2–3 часа. Не заменяйте итоговый Student CRM домашним каталогом: используйте новую папку. 

## 1.1. Общая задача

Приложение должно отображать список курсов.

Каждый курс содержит:

- ID.
- Название.
- Преподавателя.
- Продолжительность в часах.
- Учебная стоимость в USD.
- Статус доступности.

## 1.2. Исходные данные

```javascript
export const courses = [
    {
        id: 1,
        title: "JavaScript Basics",
        teacher: "Alex",
        duration: 40,
        price: 300,
        isAvailable: true
    },
    {
        id: 2,
        title: "React Basics",
        teacher: "Maria",
        duration: 50,
        price: 450,
        isAvailable: true
    },
    {
        id: 3,
        title: "Python Basics",
        teacher: "John",
        duration: 60,
        price: 500,
        isAvailable: false
    },
    {
        id: 4,
        title: "HTML and CSS",
        teacher: "Sarah",
        duration: 30,
        price: 250,
        isAvailable: true
    }
];
```

## 1.3. Требуемые компоненты

```text
App
|
+-- Header
|
+-- CourseList
|   |
|   +-- CourseCard
|   |   +-- AvailabilityBadge
|   |
|   +-- CourseCard
|   |   +-- AvailabilityBadge
|   |
|   +-- CourseCard
|   |   +-- AvailabilityBadge
|   |
|   +-- CourseCard
|       +-- AvailabilityBadge
|
+-- Footer
```

## 1.4. Требования к CourseCard

Компонент должен отображать:

1. Название курса.
2. Преподавателя.
3. Продолжительность.
4. Стоимость.
5. Статус доступности.

Данные должны поступать через props.

## 1.5. Требования к CourseList

1. Получает массив курсов через props.
2. Использует `map()`.
3. Использует `key`.
4. Отображает все курсы.
5. Показывает сообщение «Курсы не найдены.» при пустом массиве.

## 1.6. Требования к AvailabilityBadge

Если курс доступен:

```text
Доступен
```

Если недоступен:

```text
Набор закрыт
```

Используйте условный рендеринг.

## 1.7. Дополнительное задание

Если стоимость курса больше 400, показывайте:

```text
Премиальный курс
```

Используйте `&&`.

## 1.8. Дополнительное задание повышенной сложности ADV

Создайте универсальный компонент `Card` с использованием `children`.

Используйте его внутри `CourseCard`.