'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('greet', function(){

  it('returns null when non-string passed into argument', function(){

    expect(greet(5)).toBe(null);

  });

  it('greets user with name that is string', () => {

    expect(greet('world')).toBe('hello world');

  });

});
