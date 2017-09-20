'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

it('greets user with name that is string', () => {

  expect(greet('james')).toBe('hello james');

});
