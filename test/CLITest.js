var assert = require('assert');
var CLI = require('../CLI.js');
var stdout = require("test-console").stdout;
var sinon = require('sinon');
sinon.stub(process, 'exit');

describe('CLITest', function () {

    describe('main', function () {
        it('works', function () {

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
    });

    describe('help', function () {
        it('works', function () {

            var output = stdout.inspectSync(function () {
                // Given
                var i = 0;
                var prompt = () => {
                    i++;
                    return i > 1 ? 'quit' : 'help';
                };

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
                    "\nUnknown command\nThe available commands are the following : \n\n",
                    "quit - quit the program\n",
                    "order - create a new command\n",
                    "help - displays the help\n",
                    "\n",
                    "\n--------------------------------------------------------------------------------\n",
                    "          System stopped\n",
                    "--------------------------------------------------------------------------------\n\n"
                ]
            );

        });
    });
});
