// общие задачи для запуска из консоли
module.exports = {
    // сокращенные команды
    'lb': ['layout-build'], // собирает статику в layout/
    'lr': ['layout-release'], // собирает и сжимает статику в layout/
    'lw': ['layout-watch'], // наблюдает за файлами в layout/

    'default': ['project-build'], // собирает статику в project/
    'pb': ['project-build'], // собирает статику в project/
    'pr': ['project-release'], // собирает и сжимает статику в project/
    'pw': ['project-watch'], // наблюдает за файлами в project/

    // собирает статику в layout/
    'layout-build': [
        'less:layout', // компилирует .less файлы в единый .css файл
        'autoprefixer:layout', // добавляет в .css файл браузерные префиксы

        'newer:copy:layoutFonts', // копирует новые шрифты в целевую папку
        'newer:copy:layoutImg', // копирует новые изображения в целевую папку
        'newer:copy:layoutJs', // копирует новые скрипты в целевую папку
        'newer:copy:layoutVideo' // копирует новые видео в целевую папку
    ],

    // собирает и сжимает статику в layout/
    'layout-release': [
        'clean:layout', // предварительно очищает целевые папки

        'less:layout', // компилирует .less файлы в единый .css файл
        'autoprefixer:layout', // добавляет в .css файл браузерные префиксы
        'cssmin:layout', // сжимает .css файл

        'copy:layoutFonts', // копирует шрифты в целевую папку
        'copy:layoutJs', // копирует скрипты в целевую папку
        'copy:layoutVideo', // копирует видео в целевую папку
        
        'concat:layout', // объединяет скрипты в единый .js файл
        'uglify:layout', // сжимает .js файл

        'imagemin:layout' // сжимает изображения
    ],

    // наблюдает за файлами в layout/
    'layout-watch': [
        'watch:layoutLess', // наблюдает за стилями в layout/
        'watch:layoutFonts', // наблюдает за шрифтами в layout/
        'watch:layoutImg', // наблюдает за изображениями в layout/
        'watch:layoutJs', // наблюдает за скриптами в layout/
        'watch:layoutVideo', // наблюдает за видео в layout/
        'watch:layoutLivereload' // запускает перезагрузку измененных файлов в layout/
    ],

    // собирает статику в project/
    'project-build': [
        'less:project', // компилирует .less файлы в единый .css файл
        'autoprefixer:project', // добавляет в .css файл браузерные префиксы

        'newer:copy:projectFonts', // копирует новые шрифты в целевую папку
        'newer:copy:projectImg', // копирует новые изображения в целевую папку
        'newer:copy:projectJs', // копирует новые скрипты в целевую папку
        'newer:copy:projectVideo' // копирует новые видео в целевую папку
    ],

    // собирает и сжимает статику в project/
    'project-release': [
        'clean:project', // предварительно очищает целевые папки

        'less:project', // компилирует .less файлы в единый .css файл
        'autoprefixer:project', // добавляет в .css файл браузерные префиксы
        'cssmin:project', // сжимает .css файл

        'copy:projectFonts', // копирует шрифты в целевую папку
        'copy:projectJs', // копирует скрипты в целевую папку
        'copy:projectVideo', // копирует видео в целевую папку
        
        'concat:project', // объединяет скрипты в единый .js файл
        'uglify:project', // сжимает .js файл

        'imagemin:project' // сжимает изображения
    ],

    // наблюдает за файлами в project/
    'project-watch': [
        'watch:projectLess', // наблюдает за стилями в project/
        'watch:projectFonts', // наблюдает за шрифтами в project/
        'watch:projectImg', // наблюдает за изображениями в project/
        'watch:projectJs', // наблюдает за скриптами в project/
        'watch:projectVideo', // наблюдает за видео в project/
        'watch:projectLivereload' // запускает перезагрузку измененных файлов в project/
    ],
}
