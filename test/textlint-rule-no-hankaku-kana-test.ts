// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";

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
                    range: [0, 4],
                }
            ]
        },
        // multiple hit items in a line
        {
            text: `ｶﾀｶﾅはゼンカクとﾊﾝｶｸがある`,
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｶﾀｶﾅ"`,
                    range: [0, 4]
                },

                {
                    message: `Disallow to use 半角カタカナ: "ﾊﾝｶｸ"`,
                    range: [10, 14]
                }
            ]
        },

        // multiple match in multiple lines
        {
            text: "ｶﾀｶﾅ\nﾊﾝｶｸ",
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｶﾀｶﾅ"`,
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 5
                        }
                    }
                },

                {
                    message: `Disallow to use 半角カタカナ: "ﾊﾝｶｸ"`,
                    loc: {
                        start: {
                            line: 2,
                            column: 1
                        },
                        end: {
                            line: 2,
                            column: 5
                        }
                    }
                }
            ]
        }
    ]
});
