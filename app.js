var express = require('express');
var parseString = require('xml2js').parseString;
var fs = require('fs');

function startServer(dictionary) {
  console.log(dictionary);
}

fs.readFile('./data.xml', 'utf8', function (err, data) {
  if (err) { return console.log(err); }
  
  parseString(data, function (err, result) {
    if (err) { return console.log(err); }
    
    var valsis = result.dictionary.direction[0].valsi;
    var result = {};
    for(var i in valsis) {
      var valsi = valsis[i];
      result[valsi.$.word] = valsi.definition[0];
    }
    startServer(result);
  });
});
