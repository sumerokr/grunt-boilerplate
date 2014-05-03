// сжимает изображения
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    options: {
      optimizationLevel: 2, // степень сжатия (1 - 7)
      pngquant: true // компрессия .png файлов
    },
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
