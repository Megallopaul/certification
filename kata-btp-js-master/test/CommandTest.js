var assert = require('assert');
var CLI = require('../CLI.js');
var stdout = require("test-console").stdout;
var sinon = require('sinon');
sinon.stub(process, 'exit');

describe('CommandTest', function () {
  describe('save', function () {
    it('returns something??', function () {

      var output = stdout.inspectSync(function () {
        // Given
        var prompt = () => 'quit';

        // Don't forget to decomment the line on CLI.js!!!!!
        // If not decomment, the test won't work!!!!!
        dacli = new CLI(prompt);

        // When
        dacli.main();
      });

      // Then
      assert.deepEqual(
        output,
        [
          "\n--------------------------------------------------------------------------------\n",
          "          Welcome to Efficent Command System 2.0\n",
          "--------------------------------------------------------------------------------\n\n",
          "\n--------------------------------------------------------------------------------\n",
          "          System stopped\n",
          "--------------------------------------------------------------------------------\n\n"
        ]
      );

    });
  })
})