// запускает задачи параллельно
module.exports = {
    options: {
        limit: 6, // количество параллельно запускаемых задач
        logConcurrentOutput: true // выводит в консоль результаты слежения
    },

    // запускает задачи в layout/
    layout: [
        'watch:layoutLess', // наблюдает за стилями в layout/
        'watch:layoutFonts', // наблюдает за шрифтами в layout/
        'watch:layoutImg', // наблюдает за изображениями в layout/
        'watch:layoutJs', // наблюдает за скриптами в layout/
        'watch:layoutVideo', // наблюдает за видео в layout/
        'watch:layoutLivereload' // запускает перезагрузку измененных файлов в layout/
    ],

    // запускает задачи в project/
    project: [
        'watch:projectLess', // наблюдает за стилями в project/
        'watch:projectFonts', // наблюдает за шрифтами в project/
        'watch:projectImg', // наблюдает за изображениями в project/
        'watch:projectJs', // наблюдает за скриптами в project/
        'watch:projectVideo', // наблюдает за видео в project/
        'watch:projectLivereload' // запускает перезагрузку измененных файлов в project/
    ]
};
