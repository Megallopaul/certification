const Cement = require('../Cement.js')
var assert = require('assert');

describe("Cement", () => {
  describe("When adding 0 unit", () => {
    it("returns 0", () => {
      const cement = new Cement()
      cement.add(0)
      assert.equal(cement.get(), 0)
    })
  })
  describe("", () => {
    
  })
})

/*
Test list :
- Pour 0 unités données, retourne 0
- Pour 4 unités données, retourne 1 boite
- Pour 3 unités données, retourne 3 sacs
- Pour 5 unités données, retourne 1 boite + 1 sac
 */