// сжимает .css файлы
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    options: {
        keepSpecialComments: 0 // удаляет все комментарии при сжатии
    },
    main: {
      src: '<%= autoprefixer.main.dest %>',
      dest: '<%= static %>css/app.min.css'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('cssmin', config);

};
