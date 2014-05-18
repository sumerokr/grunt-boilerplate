// сжимает .js файлы
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    options: {
        preserveComments: false // удаляет все комментарии при сжатии
    },
    // modernizr должен идти отдельно и первым
    modernizr: {
      src: '<%= _src %>js/vendor/modernizr.js',
      dest: '<%= static %>js/vendor/modernizr.min.js'
    },
    // все скрипты для вставки перед закрывающим </body>
    libs: {
      src: '<%= concat.main.dest %>',
      dest: '<%= concat.main.dest %>'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('uglify', config);

};
