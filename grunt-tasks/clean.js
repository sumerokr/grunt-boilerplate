// очищает файлы и папки
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    main: {
      src: ['<%= static %>/**/*', '!<%= _src %>**']
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('clean', config);

};
