// сжимает .css файлы
module.exports = {
    options: {
        keepSpecialComments: 0 // удаляет все комментарии при сжатии
    },

    // сжимает .css файл в layout/
    layout: {
        src: '<%= autoprefixer.layout.dest %>',
        dest: '<%= layoutStatic %>css/app.min.css'
    },

    // сжимает .css файл в project/
    project: {
        src: '<%= autoprefixer.project.dest %>',
        dest: '<%= projectStatic %>css/app.min.css'
    }
};
