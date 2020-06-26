This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Задача

Написать приложение, запрашивающее данные с сервера и отображающее их в иерархическом виде. Тестовые данные можно загрузить запросом `GET /api/regions` (смотри `./src/server-mock.ts`). Ниже приведен пример ожидаемого результата. При клике по любому элементу дерева, вложенные в него элемены должны скрываться, при повторном клике раскрываться обратно.

![Example result](example.png)

## Дополнительная задача для fullstack разработчика

### Создать REST API веб сервис на nodejs

Базой данных для хранения информации должна быть PostgreSQL 12 с модулем [ltree](https://postgrespro.ru/docs/postgrespro/12/ltree),
в которой будет одна таблица регионов regions с полями id(id региона), path(путь до региона), name(название региона).
Сервис должен разворачиваться с помощью [docker-compose](https://docs.docker.com/compose/).

Сервис должен иметь хотя бы один endpoint /api/regions.

По GET запросу на /api/regions в ответ должны получить данные об иерархической структуре регионов, пример выходного JSON можно посмотреть в [файле](https://github.com/danroshko/au-react-test/blob/master/src/server-mock.ts)

Данные в задаче по фронтенд части получать из этого сервиса.

По желанию можно добавить другие endpoint:

- получение одного региона - GET запрос на /api/regions/:id
- создание региона - POST запрос на /api/regions, в теле указывается JSON вида {name: 'test', path: '1.3'}
- обновление региона - PUT запрос на /api/regions/:id, в теле указывается JSON вида {name: 'test1', path: '2.3'}
- удаление региона - DELETE запрос на /api/regions/:id
