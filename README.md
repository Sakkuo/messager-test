1. Первоначальная настройка проекта, подключение библиотек, создание стора, добавление иконки - 30 минут - 38 минут 

2. Создание скелета страницы без данных с переключением должности - 2 часа
3. Чтение документации - 20 мин - 5 мин
4. Добавление запросов на сервер и типизация полученных данных - 2 часа - 2:10
5. Добавление модалки с фильтром и ее открытие, закрытие - 2 часа - 1:09
6. Реализация сортировки по имение - 1.5 часа - 30 мин
7. Реализация сортировки по дате и добавление отсекающей с годом - 2 часа - 2:43 часа 
8. Добавление страницы с ошибкой - 30 мин - 38 мин
9. Добавление поиска по имени - 2 часа - 1:17 час
10. Поиск по внутренним данным - 1 час - 0
11. Возможность поиска по табам - 1 час - 0
12. Страничка с ошибкой поиска - 1 час - 0 
13. Страница пользователя и подключение туда данных - 1.5 часа - 1:25 часа

Общее планируемое время: 17 часов 50 минут 

1* Фильтр на клиенте
Плюсы:
1. Нет зависимости от скорости интернета => переключение происходит быстрее
2. Если интернет перестанет работать, фильтр всё равно будет работать
Минусы:
1. Нужно писать логику фильтра
2. Если данные изменятся - будет показана неверная информация

Фильтр через сервер
Плюсы:
1. В любой момент получаем свежие данные
2. Намного меньше кода
Минусы:
1. Сервер может перестать отвечать, из-за чего фильтр не будет работать
2. Намного дольше, т.к. нужно ждать ответ от сервера. А если интернет ещё и с высоким пингом / высокая загрузка сервера, то ожидание может быть дольше секунды

