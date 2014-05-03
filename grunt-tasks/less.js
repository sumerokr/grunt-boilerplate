// компилирует .less файлы в единый .css файл
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    main: {
      src: '<%= _src %>less/_main.less',
      dest: '<%= static %>css/app.css'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('less', config);

};
