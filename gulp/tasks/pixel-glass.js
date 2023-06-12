export const pp = () => app.gulp.src(app.path.src.pp)
  .pipe(app.gulp.dest(app.path.build.pp));
