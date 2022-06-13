public - статичные файлы, которые можно напрямую грузить с фронта. Например, <img src="/img/qweqwe.png"/> подгрузит public/img/qweqwe.png

components - react компоненты
global/constants - константы
global/scss - глобальные стили, можно не трогать наверное
global/slices - redux слайсы. В них вранится состояние приложения
global/utils - всякие хэлперы

pages - страницы. \_app и \_document - не страницы. Сейчас есть 3 страницы - index, login, logout (user/\* я забыл удалить - удали)
на них можно зайти localhost:3000, localhost:3000/login, localhost:3000/signup,

store - тут собирается состояние приложения, можно не трогать
