# Домашнее задание: автотесты

Вам дано приложение на JavaScript и нужно написать для него автотесты: интеграционные тесты на интерфейс и модульные тесты на серверную часть.

## Предметная область

Приложение отображает в браузере информацию из git репозитория: список коммитов, файловую систему для выбранного коммита, содержимое выбранного файла (поддерживаются только текстовые форматы). Для удобства навигации на каджой странице отображаются "хлебные крошки".

## Как запустить

```sh
npm i
npm start
```

## Интеграционные тесты (см ./hermione/)

Сценарии для интеграционных тестов

- на всех страницах (история коммитов, просмотр файловой системы, просмотр содержимого файла) правильно отображается их содержимое;
- правильно работают переходы по страницам
  - из списка коммитов на список файлов
  - из списка файлов во вложенную папку
  - из списка файлов на страницу отдельного файла
  - переходы по хлебным крошкам

## Модульные тесты

- нужно добавить в README список логических блоков системы и их сценариев
- для каждого блока нужно написать модульные тесты
- если необходимо, выполните рефакторинг, чтобы реорганизовать логические блоки или добавить точки расширения


## Запуск интеграционных тестов

В первой вкладке терминала `selenium-standalone start`

Во второй `npm run test:integration`

P.S. На машине должна стоять [Java 8](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

Скрипт тестов лежит в `hermione/`, плагины в `hermione-custom-commands`. Плагины специально лежат в этом же репозитории, а не в отдельном. Это для удобства разработки и проверки. 

## Запуск модульных тестов

`npm test`

процент покрытия будет выведен в консоли + покрытие по ветвям можно смотреть `coverage/index.html`.
Файл с тестами лежит рядом с тестируемым модулем. 

## Выделенные блоки

- навигация `utils/navigation.test.js`
- взаимодействие с git `utils/git.test.js`
- подготовка данных для обтображения страниц (вынесены из контроллеров) `utils/prepareData.test.js`
- отображение страниц 
    - страница коммитов @
    - страница файлов @
    - страница контента файла `controllers/contentController.test.js`

@ - не нестировалось так как вся логика с обработкой дынных вынесена в `utils/prepareData.js`. В этих контродллерах осталась небольшая композиция протестированных функций. Для этого достаточно редких интеграционных тестов.
