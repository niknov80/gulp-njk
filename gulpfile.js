//Основные модули
import gulp from "gulp";

//Импорт путей
import {path} from "./gulp/config/path.js";

//Импорт плагинов
import {plugins} from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

//Импорт задач
import {clean} from "./gulp/tasks/clean.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {styles} from "./gulp/tasks/styles.js";
import {scripts} from "./gulp/tasks/scripts.js";
import {images} from "./gulp/tasks/images.js";
import {sprite, svg} from "./gulp/tasks/svg.js";
import {ttfToWoff, copyWoff} from "./gulp/tasks/fonts.js";
import {pp} from "./gulp/tasks/pixel-glass.js";
import {vendor} from "./gulp/tasks/vendor.js";


//Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.templates, html);
  gulp.watch(path.watch.json, html);
  gulp.watch(path.watch.sass, styles);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.img, images).on('change', app.plugins.browsersync.reload);
  gulp.watch(path.watch.icons, sprite).on('change', app.plugins.browsersync.reload);
  gulp.watch(path.watch.svg, svg).on('change', app.plugins.browsersync.reload);
}

const fontTask = gulp.series(ttfToWoff, copyWoff)

// Основные задачи
const mainTasks = gulp.parallel(fontTask, vendor, images, svg, sprite, html, styles, scripts)

//Построение сценариев выполнения задач
export const dev = gulp.series(clean, gulp.parallel(pp, mainTasks), gulp.parallel(watcher, server));
export const build = gulp.series(clean, mainTasks);

//Выполнение сценария по умолчанию
gulp.task('default', dev);

