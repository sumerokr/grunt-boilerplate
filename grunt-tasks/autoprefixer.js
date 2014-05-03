// добавляет в .css файл браузерные префиксы
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    main: {
      src: '<%= less.main.dest %>',
      dest: '<%= less.main.dest %>'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('autoprefixer', config);

};
