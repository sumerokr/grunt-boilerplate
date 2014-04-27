// добавляет в .css файл браузерные префиксы
module.exports = {
    // добавляет в .css файл браузерные префиксы в layout/
    layout: {
        src: '<%= less.layout.dest %>',
        dest: '<%= less.layout.dest %>'
    },

    // добавляет в .css файл браузерные префиксы в project/
    project: {
        src: '<%= less.project.dest %>',
        dest: '<%= less.project.dest %>'
    }
};
