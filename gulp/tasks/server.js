export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: app.path.build.templates
    },
    notify: false,
    injectChanges: false,
    port: 3000,
  });
}
