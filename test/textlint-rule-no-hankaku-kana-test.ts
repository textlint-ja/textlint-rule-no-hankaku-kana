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
            output: "カタカナ",
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
            output: `カタカナはゼンカクとハンカクがある`,
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
            output: "カタカナ\nハンカク",
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
        },
        {
            text: `NFCで表現できる濁点・半濁点はNFCに修正する：ﾊﾟﾝﾀﾞ`,
            output: `NFCで表現できる濁点・半濁点はNFCに修正する：パンダ`,
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ﾊﾟﾝﾀﾞ"`,
                    range: [25, 30]
                },
            ]
        },
        {
            text: `NFCで表現できない濁点・半濁点はNFDに修正する：ｱ\u{ff9e}ﾂ\u{ff9f}`,
            output: `NFCで表現できない濁点・半濁点はNFDに修正する：ア\u{3099}ツ\u{309a}`,
            errors: [
                {
                    message: `Disallow to use 半角カタカナ: "ｱ\u{ff9e}ﾂ\u{ff9f}"`,
                    range: [26, 30]
                },
            ]
        },
    ]
});
