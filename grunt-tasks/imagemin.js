// сжимает изображения
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    main: {
      expand: true,
      cwd: '<%= _src %>img/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= static %>img/'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('imagemin', config);

};
