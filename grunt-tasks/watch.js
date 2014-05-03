// наблюдает за файлами и при их изменении запускает назначенные задачи
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    // наблюдает за стилями
    styles: {
      files: '<%= _src %>less/**/*.{less,css}',
      tasks: ['less', 'autoprefixer']
    },
    // наблюдает за изображениями
    images: {
      files: '<%= _src %>img/**/*.{jpg,png,gif}',
      tasks: ['newer:copy:images']
    },
    // наблюдает за скриптами
    scripts: {
      files: '<%= _src %>js/**/*.js',
      tasks: ['newer:copy:scripts']
    },
    // наблюдает за целевыми файлами
    livereload: {
      files: [
        '<%= static %>css/app.css',
        '<%= static %>img/**/*.{jpg,png,gif}',
        '<%= static %>js/**/*.js',
      ],
      options: {
        livereload: true // запускает перезагрузку измененных файлов
      }
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('watch', config);

};
