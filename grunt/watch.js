// наблюдает за файлами и при их изменении запускает назначенные задачи
module.exports = {
    // наблюдает за стилями в layout/
    layoutLess: {
        files: '<%= layoutSrc %>less/**/*.{less,css}',
        tasks: ['less:layout', 'autoprefixer:layout']
    },
    // наблюдает за шрифтами в layout/
    layoutFonts: {
        files: '<%= layoutSrc %>fonts/**/*.{ttf,woff,eot}',
        tasks: ['newer:copy:layoutFonts']
    },
    // наблюдает за изображениями в layout/
    layoutImg: {
        files: '<%= layoutSrc %>img/**/*.{jpg,png,gif}',
        tasks: ['newer:copy:layoutImg']
    },
    // наблюдает за скриптами в layout/
    layoutJs: {
        files: '<%= layoutSrc %>js/**/*.js',
        tasks: ['newer:copy:layoutJs']
    },
    // наблюдает за видео в layout/
    layoutVideo: {
        files: '<%= layoutSrc %>video/**/*.{mp4,webm,ogg}',
        tasks: ['newer:copy:layoutVideo']
    },
    // запускает перезагрузку измененных файлов в layout/
    layoutLivereload: {
        files: [
            '<%= layoutStatic %>css/app.css',
            '<%= layoutStatic %>img/**/*.{jpg,png,gif}',
            '<%= layoutStatic %>js/**/*.js',
        ],
        options: {
            livereload: true
        }
    },

    // наблюдает за стилями в project/
    projectLess: {
        files: '<%= projectSrc %>less/**/*.{less,css}',
        tasks: ['less:project', 'autoprefixer:project']
    },
    // наблюдает за шрифтами в project/
    projectFonts: {
        files: '<%= projectSrc %>fonts/**/*.{ttf,woff,eot}',
        tasks: ['newer:copy:projectFonts']
    },
    // наблюдает за изображениями в project/
    projectImg: {
        files: '<%= projectSrc %>img/**/*.{jpg,png,gif}',
        tasks: ['newer:copy:projectImg']
    },
    // наблюдает за скриптами в project/
    projectJs: {
        files: '<%= projectSrc %>js/**/*.js',
        tasks: ['newer:copy:projectJs']
    },
    // наблюдает за видео в project/
    projectVideo: {
        files: '<%= projectSrc %>video/**/*.{mp4,webm,ogg}',
        tasks: ['newer:copy:projectVideo']
    },
    // запускает перезагрузку измененных файлов в project/
    projectLivereload: {
        files: [
            '<%= projectStatic %>css/app.css',
            '<%= projectStatic %>img/**/*.{jpg,png,gif}',
            '<%= projectStatic %>js/**/*.js',
        ],
        options: {
            livereload: true
        }
    }
};
