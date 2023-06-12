// Получаем имя из папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build'; // Путь к папке с результатом, можно поменять на rootFolder
const srcFolder = './src'; //  0 Путь к исходным файлам

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    templates: `${buildFolder}`,
    css: `${buildFolder}/static/css/`,
    js: `${buildFolder}/static/js/`,
    img: `${buildFolder}/static/img/`,
    sprite: `${buildFolder}/static/img/`,
    svg: `${buildFolder}/static/img/`,
    fonts: `${buildFolder}/static/fonts/`,
    pp: `${buildFolder}/static/pp/`,
    vendor: `${buildFolder}/static/vendor/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    json: `${srcFolder}/data.json`,
    templates: `${srcFolder}/templates`,
    pages: `${srcFolder}/templates/pages/*.j2`,
    sass: `${srcFolder}/sass/style.scss`,
    js: `${srcFolder}/static/js/script.js`,
    img: `${srcFolder}/static/img/**/*.{png,jpg,jpeg}`,
    icons: `${srcFolder}/static/img/icons/**/*.svg`,
    svg: `${srcFolder}/static/img/{common,content}/**/*.svg`,
    fonts: `${srcFolder}/static/fonts/`,
    ttf: `${srcFolder}/static/fonts/*.ttf`,
    woff: `${srcFolder}/static/fonts/*.{woff,woff2}`,
    pp: `${srcFolder}/static/pp/*.*`,
    vendor: `${srcFolder}/static/vendor/**/*.*`
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    templates: `${srcFolder}/templates/**/*.j2`,
    json: `${srcFolder}/data.json`,
    sass: `${srcFolder}/sass/**/*.scss`,
    js: `${srcFolder}/static/js/**/*.js`,
    img: `${srcFolder}/static/img/**/*.{png,jpg,jpeg}`,
    icons: `${srcFolder}/static/img/icons/**/*.svg`,
    svg: `${srcFolder}/static/img/{common,content}/**/*.svg`
  },
  clean: buildFolder, // папка для очистки
  buildFolder, // папка для продакшена
  srcFolder, // папка с исходниками
  rootFolder // корневая папка проекта
};
