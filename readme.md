# Tarkov Dev Loader

Вспомогательная утилита для загрузки статических данных, для проекта TSL.

Приложение обращается к GraphQL API Tarkov Dev и сохраняет статическую информацию по игре Escape From Tarkov.

## Скрипты

Основные скрипты:

```sh
# для установки зависимостей
npm run istall

# для разработки (nodemon)
npm run dev

# собрать (создастя директория build)
npm run build

# запустить сборку
npm run sart
```

## Сохранение

Данные сохраняются в JSON формате в директории data, по заданным языкам в [./src/constants.ts](./src/constants.ts). Шаблон сохранения `./data/{language}/{name}.json`. Где lnaguage - язык из constants, name - название сущности (tasks, traders, items ...).
