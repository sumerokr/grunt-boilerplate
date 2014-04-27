# Readme

## Установка nodejs и grunt
http://nodejs.org/  
```
npm install -g grunt-cli
```

## Установка зависимостей
```
npm install
```
===

### Задачи для layout/
#### Собирает статику в layout/
```
grunt lb
grunt layout-build
```
===

#### собирает и сжимает статику в layout/
```
grunt lr
grunt layout-release
```
===

#### наблюдает за файлами в layout/
```
grunt lw
grunt layout-watch
```
===

### Задачи для project/
#### собирает статику в project/
```
grunt
grunt pb
grunt project-build
```
===

#### собирает и сжимает статику в project/
```
grunt release
grunt pr
grunt project-release
```
===

#### наблюдает за стилями в project/
```
grunt pw
grunt project-watch
```
===

Подробнее в grunt/aliases.js