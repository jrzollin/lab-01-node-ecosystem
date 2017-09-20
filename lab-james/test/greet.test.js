'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

test('greets user with name that is string', () => {

  expect(greet('james')).typeOf('string');

});
