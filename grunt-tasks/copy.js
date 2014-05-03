// копирует папки и файлы
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    // копирует шрифты в целевую папку
    fonts: {
        expand: true,
        cwd: '<%= _src %>fonts/',
        src: '**/*.{ttf,woff,eot}',
        dest: '<%= static %>fonts/'
    },
    // копирует изображения в целевую папку
    images: {
        expand: true,
        cwd: '<%= _src %>img/',
        src: '**/*.{jpg,png,gif}',
        dest: '<%= static %>img/'
    },
    // копирует скрипты в целевую папку
    scripts: {
        expand: true,
        cwd: '<%= _src %>js/',
        src: '**/*.js',
        dest: '<%= static %>js/'
    },
    // копирует видео в целевую папку
    videos: {
        expand: true,
        cwd: '<%= _src %>video/',
        src: '**/*.{mp4,webm,ogg}',
        dest: '<%= static %>video/'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('copy', config);

};
