/*
 * fepigeon
 * https://github.com/hafeyang/pigeon
 *
 * Copyright (c) 2014 HafeYang
 * Licensed under the MIT license.
 */

'use strict';

exports.awesome = function() {
  return 'awesome';
};

exports.init = function() {
	
	var util = require('util'),
    http = require('http'),
    connect = require('connect'),
    httpProxy = require('http-proxy');

//
// Basic Connect App
//
connect.createServer(
  function (req, res, next) {
    var _write = res.write;

    res.write = function (data) {
      _write.call(res, data.toString().replace("Ruby", "nodejitsu"));
    }
    next();
  },
  function (req, res) {
    proxy.web(req, res);
  }
).listen(8013);

//
// Basic Http Proxy Server
//
var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:9013'
});

//
// Target Http Server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, I know Ruby\n');
}).listen(9013);





}
