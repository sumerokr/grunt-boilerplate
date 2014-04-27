// сжимает изображения
module.exports = {
    options: {
        optimizationLevel: 2, // степень сжатия (1 - 7)
        pngquant: true // компрессия .png файлов
    },

    // сжимает изображения в layout/
    layout: {
        expand: true,
        cwd: '<%= layoutSrc %>img/',
        src: '**/*.{jpg,png,gif}',
        dest: '<%= layoutStatic %>img/'
    },

    // сжимает изображения в project/
    project: {
        expand: true,
        cwd: '<%= projectSrc %>img/',
        src: '**/*.{jpg,png,gif}',
        dest: '<%= projectStatic %>img/'
    }
};
