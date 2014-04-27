// копирует папки и файлы
module.exports = {
    // копирует новые шрифты в целевую папку в layout/
    layoutFonts: {
        expand: true,
        cwd: '<%= layoutSrc %>fonts/',
        src: '**/*.{ttf,woff,eot}',
        dest: '<%= layoutStatic %>fonts/'
    },
    // копирует новые изображения в целевую папку в layout/
    layoutImg: {
        expand: true,
        cwd: '<%= layoutSrc %>img/',
        src: '**/*.{jpg,png,gif}',
        dest: '<%= layoutStatic %>img/'
    },
    // копирует новые скрипты в целевую папку в layout/
    layoutJs: {
        expand: true,
        cwd: '<%= layoutSrc %>js/',
        src: '**/*.js',
        dest: '<%= layoutStatic %>js/'
    },
    // копирует новые видео в целевую папку в layout/
    layoutVideo: {
        expand: true,
        cwd: '<%= layoutSrc %>video/',
        src: '**/*.{mp4,webm,ogg}',
        dest: '<%= layoutStatic %>video/'
    },

    // копирует новые шрифты в целевую папку в project/
    projectFonts: {
        expand: true,
        cwd: '<%= projectSrc %>fonts/',
        src: '**/*.{ttf,woff,eot}',
        dest: '<%= projectStatic %>fonts/'
    },
    // копирует новые изображения в целевую папку в project/
    projectImg: {
        expand: true,
        cwd: '<%= projectSrc %>img/',
        src: '**/*.{jpg,png,gif}',
        dest: '<%= projectStatic %>img/'
    },
    // копирует новые скрипты в целевую папку в project/
    projectJs: {
        expand: true,
        cwd: '<%= projectSrc %>js/',
        src: '**/*.js',
        dest: '<%= projectStatic %>js/'
    },
    // копирует новые видео в целевую папку в project/
    projectVideo: {
        expand: true,
        cwd: '<%= projectSrc %>video/',
        src: '**/*.{mp4,webm,ogg}',
        dest: '<%= projectStatic %>video/'
    },

    // переносит исходные файлы в project/
    layoutMigrate: {
        expand: true,
        cwd: '<%= layoutSrc %>',
        src: '**',
        dest: '<%= projectSrc %>'
    }
};
