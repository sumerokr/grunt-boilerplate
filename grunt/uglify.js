// сжимает .js файлы
module.exports = {
    options: {
        preserveComments: false // удаляет все комментарии при сжатии
    },

    // сжимает .js файл в layout/
    layout: {
        src: '<%= concat.layout.dest %>',
        dest: '<%= layoutStatic %>js/app.min.js'
    },

    // сжимает .js файл в project/
    project: {
        src: '<%= concat.project.dest %>',
        dest: '<%= projectStatic %>js/app.min.js'
    }
};
