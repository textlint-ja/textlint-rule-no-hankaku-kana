// LICENSE : MIT
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textlint_tester_1 = __importDefault(require("textlint-tester"));
const tester = new textlint_tester_1.default();
// rule
const textlint_rule_no_hankaku_kana_1 = __importDefault(require("../src/textlint-rule-no-hankaku-kana"));
// ruleName, rule, { valid, invalid }
tester.run("no-hankaku-kana", textlint_rule_no_hankaku_kana_1.default, {
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
