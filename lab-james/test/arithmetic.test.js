'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

it('adds two numbers correctly', function(){

  expect(arithmetic.add(3,4)).toBe(7);

});

it('subtracts two numbers correctly', function(){

  expect(arithmetic.sub(4,3)).toBe(1);

});
