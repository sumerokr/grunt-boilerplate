// объединяет несколько файлов в один
module.exports = {
    // объединяет скрипты в единый .js файл в layout/
    layout: {
        src: [
            '<%= layoutSrc %>js/vendor/jquery-1.11.0.js',
            '<%= layoutSrc %>js/vendor/holder.js',
            '<%= layoutSrc %>js/main.js'
        ],
        dest: '<%= layoutStatic %>js/app.js'
    },

    // объединяет скрипты в единый .js файл в project/
    project: {
        src: [
            '<%= projectSrc %>js/vendor/jquery-1.11.0.js',
            '<%= projectSrc %>js/vendor/holder.js',
            '<%= projectSrc %>js/main.js'
        ],
        dest: '<%= projectStatic %>js/app.js'
    }
};
