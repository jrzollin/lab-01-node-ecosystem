'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('arithmetic.add', function(){

  it('adds two numbers correctly', function(){

    expect(arithmetic.add(3,4)).toBe(7);

  });

  it('returns null when one argument is not a number', function(){

    expect(arithmetic.add(3, 'banana')).toBe(null);

  });

});

describe('arithmetic.sub', function(){

  it('subtracts two numbers correctly', function(){

    expect(arithmetic.sub(4,3)).toBe(1);

  });

  it('returns null when one argument is not a number', function(){

    expect(arithmetic.sub(4, 'banana')).toBe(null);

  });

});
