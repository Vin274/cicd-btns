import searchQuery from "./searchQuery";

const specialChars = /[^a-z]/g;
const mission3char = /[! ? -;]/g;
const whiteSpaces = /(^[\s\t]+|[\s\t]+([\s\t]|$))/g;

describe("Replacing special character strings", () => {
    const testVariables = [
        { input: "hello!world", expected: "hello world" },
        { input: "hello%world", expected: "hello world" },
        { input: "!hello world", expected: "hello world" },
        { input: ";hello?world!", expected: "hello world" },
        { input: "hello;world", expected: "hello world" },
        { input: "hello world?", expected: "hello world" },
    ];

    testVariables.map((item) => {
        it(`replace special characters in ${item.input}`, () => {
            let newInput = item.input;
            const removingChars = newInput.replace(specialChars, " ");
            const expected = removingChars.replace(whiteSpaces, " ").trim();

            return expect(expected).toBe(item.expect);
        });
    });
});
