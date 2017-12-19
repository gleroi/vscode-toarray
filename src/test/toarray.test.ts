//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
import * as toarray from '../toarray';

// Defines a Mocha test suite to group tests of similar kind together
suite("toarray.Hex", () => {

    test("00 to 0x00", () => {
        var input = "00";
        var result = toarray.Hex(input);
        assert.equal(result, "0x00");
    });

    test("0x to 0x0x", () => {
        var inputs = ["01", "02", "03","04", "05","06","07","08","0a","0b", "0c","0e","0F"];
        var results = ["0x01", "0x02", "0x03","0x04", "0x05","0x06","0x07","0x08","0x0a","0x0b", "0x0c","0x0e","0x0F"];
        
        for (let i = 0; i < inputs.length; i++) {
            var result = toarray.HexSeparator(inputs[i]);
            assert.equal(result, results[i]);
        }
    });

    test("00010203040a0A0B0C0D0e0F to 0x00, 0x01, .. 0x0F", () => {
        var input = "00010203040a0A0B0C0D0e0F"
        var result = "0x00, 0x01, 0x02, 0x03, 0x04, 0x0a, 0x0A, 0x0B, 0x0C, 0x0D, 0x0e, 0x0F";

        assert.equal(toarray.HexSeparator(input), result);
    });

    test("does not fail on odd length", () => {
        var input = "00010203040a0A0B0C0D0e0F0"
        var result = "0x00, 0x01, 0x02, 0x03, 0x04, 0x0a, 0x0A, 0x0B, 0x0C, 0x0D, 0x0e, 0x0F, 0x0";

        assert.equal(toarray.HexSeparator(input), result);
    });
});

suite("toarray.HexSeparator", () => {
    test("Handle comma, semicolon and space as separator", () => {
        var input = "0001,02,03;05; 06 07 0008 ";
        assert.equal(toarray.HexSeparator(input), "0x00, 0x01, 0x02, 0x03, 0x05, 0x06, " + "0x07, 0x00, 0x08");
    })
});