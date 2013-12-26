#normalize.styl

Stylus port of normalize.css v2.1.3.

##Installation

```
terminal: ~$
npm install normalize.styl
```

##JavaScript API

Below is an example of how to utilize normalize and stylus with the connect framework (or express).

```
var connect = require('connect')
  , stylus = require('stylus')
  , normalize = require('normalize');

var server = connect();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .include(normalize.path);
}

server.use(stylus.middleware({
    src: __dirname
  , compile: compile
}));
```

##Stylus API

Import the library:

```
`@import "normalize"`
```

License

(The MIT License)

Copyright (c) 2013 geekrrr <geekrrr@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
