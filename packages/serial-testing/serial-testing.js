'use strict'
const Buffer = require('safe-buffer').Buffer
const Transform = require('stream').Transform

/**
 * A transform stream that does something pretty cool.
 * @extends Transform
 * @param {Object} options parser options object
 * @example
// To use the `Serial-Testing` stream:
const SerialTesting = require('serial-testing')
const serialTesting = new SerialTesting()
serialTesting.on('data', console.log)
serialTesting.write(Buffer.from([1,2,3]))
*/
class SerialTesting extends Transform {
  constructor (options) {
    super(options)
    // your code here
  }
}

module.exports = SerialTesting
