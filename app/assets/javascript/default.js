// app.js
'use strict';

// libary
require('./ngReqShim')();

// default include
require("bootstrap-webpack");            // include bootstrap
require("./../stylesheets/styles.scss"); // default css

// // plugin loader
require("semantic-ui/dist/semantic.min.css");
require("semantic-ui/dist/semantic.min.js");
require("modernizr/Modernizr.js");

// // other page
require('./angularDefault')();
require('./AMDexample').face();

var callFunt = require('./AMDnotDenpend');
callFunt.occ();