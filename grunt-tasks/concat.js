// объединяет несколько файлов в один
module.exports = function(grunt) {

  // конфигурация задачи
  var config = {
    main: {
      src: [
        '<%= _src %>js/vendor/jquery.js',
        '<%= _src %>js/vendor/holder.js',
        '<%= _src %>js/vendor/jquery.fancybox.js',
        '<%= _src %>js/vendor/jquery.inputmask.js',
        '<%= _src %>js/vendor/jquery.placeholder.js',
        '<%= _src %>js/vendor/jquery.validate.js',
        '<%= _src %>js/main.js'
      ],
      // .min добавляется сейчас, до минификации умышленно
      // чтобы не пришлось потом удалять неиспользуемый app.js
      dest: '<%= static %>js/app.min.js'
    }
  };

  // добавление конфигурации задачи в основную конфигурацию Grunt-а
  grunt.config.set('concat', config);

};
