// gateway-test.js
// 2016-05-04

/*jslint node:true, nomen: true*/

(function () {

  "use strict";
  
  var assert = require('assert'),
    vows = require('vows'),
    gateway = require('../');

  vows.describe('gateway').addBatch({
    'When setting mch_id': {
      topic: gateway.setMchId('foo'),
      'result should be valid': function (result) {
      }
    }
  })['export'](module);
  
}());