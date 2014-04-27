// очищает файлы и папки
module.exports = {
    // очищает целевые папки в layout/
    layout: {
        src: ['<%= layoutStatic %>/**/*', '!<%= layoutSrc %>**']
    },

    // очищает целевые папки в project/
    project: {
        src: ['<%= projectStatic %>/**/*', '!<%= projectSrc %>**']
    }
};
