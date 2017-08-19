const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

require('app/server'); 

global.expect = expect;
global.sinon = sinon;
