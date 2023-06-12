import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
export const ttfToWoff = () => app.gulp.src(app.path.src.ttf)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(ttf2woff())
  .pipe(app.gulp.dest(app.path.src.fonts))
  .pipe(app.gulp.src(app.path.src.ttf))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.src.fonts));

export const copyWoff = () => app.gulp.src(app.path.src.woff)
  .pipe(app.gulp.dest(app.path.build.fonts));
