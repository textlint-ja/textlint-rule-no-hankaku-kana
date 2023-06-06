// LICENSE : MIT
"use strict";
import { RuleHelper } from "textlint-rule-helper";
import { TextlintRuleModule } from "@textlint/types";

const HankakuRegExp = /([\uff61-\uff9f]+)/g;
export type Options = {};
export const report: TextlintRuleModule<Options> = function reporter(context) {
    const { Syntax, RuleError, fixer, report, locator, getSource } = context;
    const helper = new RuleHelper(context);
    return {
        [Syntax.Str](node) {
            if (!helper.isPlainStrNode(node)) {
                return;
            }
            const nodeText = getSource(node);
            for (const match of nodeText.matchAll(HankakuRegExp)) {
                const text = match[0];
                const index = match.index ?? 0;
                const range = [index, index + text.length] as const;
                const ruleError = new RuleError(`Disallow to use 半角カタカナ: "${text}"`, {
                    padding: locator.range(range),
                    fix: fixer.replaceTextRange(range, text.normalize('NFKC')),
                });
                report(node, ruleError);
            }
        }
    }
};
export default {
    linter: report,
    fixer: report,
};
