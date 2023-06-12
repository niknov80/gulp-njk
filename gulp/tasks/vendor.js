export const vendor = () => app.gulp.src(app.path.src.vendor)
  .pipe(app.gulp.dest(app.path.build.vendor));
