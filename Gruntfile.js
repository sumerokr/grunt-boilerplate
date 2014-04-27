module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        data: {
            // целевая папка и исходники в layout/
            layoutStatic: './layout/static/',
            layoutSrc: './layout/static/_src/',

            // целевая папка и исходники в project/
            projectStatic: './project/static/',
            projectSrc: './project/static/_src/'
        }
    });
};
