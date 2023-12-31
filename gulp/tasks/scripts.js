import esbuild from 'gulp-esbuild';
export const scripts = () => app.gulp.src(app.path.src.js)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'JS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(esbuild({
    outfile: 'script.min.js',
    bundle: true,
    minify: true,
    sourcemap: app.isDev ? 'both' : false
  }))
  .pipe(app.gulp.dest(app.path.build.js))
  .pipe(app.plugins.browsersync.stream());
