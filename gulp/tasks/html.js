import render from 'gulp-nunjucks-render';
import data from 'gulp-data';
import versionNumber from 'gulp-version-number';
import fs from 'fs';
export const html = () => app.gulp.src(app.path.src.pages)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(data(() => JSON.parse(
    fs.readFileSync(app.path.src.json)
  )))
  .pipe(render(({
    path: [`${app.path.src.templates}`]
  })))
  .pipe(
    app.plugins.if(
      app.isBuild,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js'
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      })
    )
  )
  .pipe(app.gulp.dest(app.path.build.templates))
  .pipe(app.plugins.browsersync.stream());

