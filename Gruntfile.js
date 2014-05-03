module.exports = function(grunt) {

  // первоначальная конфигурация
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // корень проекта
    root: './layout/',
    // папка расположения статики
    static: './layout/static/',
    // папка расположения исходных файлов
    _src: './layout/static/_src/'
  });

  // загрузка все плагинов-задач
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // папка расположения задач
  grunt.task.loadTasks("./grunt-tasks/");

};
