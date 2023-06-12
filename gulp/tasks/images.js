import sharpOptimizeImages from 'gulp-sharp-optimize-images';

const imageOptimizeConfigs = {
  webp: {
    quality: 80,
    lossless: false,
  },
  png_to_png: { // eslint-disable-line camelcase
    quality: 80,
    lossless: false,
  },
  jpg_to_jpg: { // eslint-disable-line camelcase
    quality: 80,
    mozjpeg: true,
  }
};
export const images = () => app.gulp.src(app.path.src.img)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'IMG',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(sharpOptimizeImages(imageOptimizeConfigs))
  .pipe(app.gulp.dest(app.path.build.img));
