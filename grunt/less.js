// компилирует .less файлы в единый .css файл
module.exports = {
    // компилирует .less файлы в единый .css файл в layout/
    layout: {
        src: '<%= layoutSrc %>less/_main.less',
        dest: '<%= layoutStatic %>css/app.css'
    },

    // компилирует .less файлы в единый .css файл в project/
    project: {
        src: '<%= projectSrc %>less/_main.less',
        dest: '<%= projectStatic %>css/app.css'
    }
};
