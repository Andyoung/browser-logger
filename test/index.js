
const pkg = require('..')
const logger = pkg.default
const Logger = pkg.Logger
const assert = require('assert')

/**
 * Examples.
 */

const example = new Logger({
  level: 'debug',
})


example.info('Websocket connected!', { port: 4000 })
example.error('Invalid `type` argument', { argument: 'type', value: 'nuber' })

// example.debug('message', { data: [{ index: 1 }, { index: 2 }] })
// example.info('message', { data: [{ index: 1 }, { index: 2 }] })
// example.warn('message', { data: [{ index: 1 }, { index: 2 }] })
// example.error('message', { data: [{ index: 1 }, { index: 2 }] })

// example.error(new Error('An error occured!'))

/**
 * Tests.
 */

describe('browser-logger', () => {

  describe('interface', () => {

    it('should export `logger`', () => {
      assert(logger)
      assert(logger instanceof Logger)
    })

    it('should export `Logger`', () => {
      assert(Logger)
      assert(Logger.prototype)
    })

    it('should be instanciable', () => {
      const l = new Logger()
      assert(l instanceof Logger)
    })

    it('should set config', () => {
      const l = new Logger()
      assert.deepEqual(l.config, {
        level: 'info',
        prefix: '',
        threshold: 2,
      })
    })

    it('should define `logger.debug`', () => {
      assert.equal(typeof logger.debug, 'function')
    })

    it('should define `logger.info`', () => {
      assert.equal(typeof logger.info, 'function')
    })

    it('should define `logger.warn`', () => {
      assert.equal(typeof logger.warn, 'function')
    })

    it('should define `logger.error`', () => {
      assert.equal(typeof logger.error, 'function')
    })

  })

})
