import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browsersync from 'browser-sync';
import rename from 'gulp-rename';
import ifPlugin from 'gulp-if';

export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  rename: rename,
  if: ifPlugin
}
