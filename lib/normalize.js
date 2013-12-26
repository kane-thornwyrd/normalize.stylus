/*!
 * normalize.styl
 * Copyright (c) 2013 geekrrr <geekrrr@yahoo.com>
 * MIT Licensed
 */

/*
 * Module dependencies.
 */

var stylus = require('stylus')
, path = require('path')

/*
 * Expose callback function.
 */

exports = module.exports = plugin;

/*
 * Library version.
 */

exports.version = require(path.join(__dirname, '../package.json')).version;

/*
 * Stylus path.
 */

exports.path = __dirname;

/*
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style) {
    style.include(__dirname);
  };
}
