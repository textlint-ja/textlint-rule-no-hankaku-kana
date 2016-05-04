// LICENSE : MIT
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
import rule from "../src/textlint-rule-no-hankaku-kana";
// ruleName, rule, { valid, invalid }
tester.run("no-hankaku-kana", rule, {
    valid: [
        "カタカナ",
        "ひらがな",
        "Half Width Alphabet",
        "吉野家"
    ],
    invalid: [
        {
            text: "ｶﾀｶﾅ",
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｶﾀｶﾅ"`,
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple hit items in a line
        {
            text: `ｶﾀｶﾅはゼンカクとﾊﾝｶｸがある`,
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｶﾀｶﾅ"`,
                    line: 1,
                    column: 1
                },

                {
                    message: `Disallow to use 半角カタカナ: "ﾊﾝｶｸ"`,
                    line: 1,
                    column: 11
                }
            ]
        },

        // multiple match in multiple lines
        {
            text: "ｶﾀｶﾅ\nﾊﾝｶｸ",
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｶﾀｶﾅ"`,
                    line: 1,
                    column: 1
                },

                {
                    message: `Disallow to use 半角カタカナ: "ﾊﾝｶｸ"`,
                    line: 2,
                    column: 1
                }
            ]
        }
    ]
});