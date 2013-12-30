
var fs = require('fs');
var path = require('path');
/*
 * GET home page.
 */

exports.index = function(req, res){

  fs.readFile(path.join('..','package.json'), { 'encoding': 'utf-8' }, function (err, data) {
    if(err) throw err;
    res.render('index', JSON.parse(data));
  });

};