# textlint-rule-no-hankaku-kana [![Actions Status: test](https://github.com/textlint-ja/textlint-rule-no-hankaku-kana/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-no-hankaku-kana/actions?query=workflow%3A"test")

textlint rule that disallow to use 半角カタカナ.

半角カナの利用を禁止する[textlint](https://github.com/textlint/textlint "textlint")ルール。

> 半角カナ（はんかくカナ）、半角片仮名（はんかくかたかな, Halfwidth Katakana）とは、幅が半分（半角）の片仮名文字の事。

半角カナとしては以下を対象としています。

- Half-width CJK punctuation（U+FF61〜FF64）
- Half-width Katakana variants（U+FF65〜FF9F）

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-hankaku-kana

## Usage

Via `.textlintrc`(Recommended)


```json
{
    "rules": {
        "no-hankaku-kana": true
    }
}
```

Via CLI

```
textlint --rule no-hankaku-kana README.md
```

## Fixable

[![Textlint fixable](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

`textlint --fix` での自動修正に対応しています。

*   NFCで表現できる濁点・半濁点はNFCに修正
    *   例：ﾊﾟﾝﾀﾞはパンダに修正
*   NFCで表現できない濁点・半濁点はNFDに修正
    *   例：ｱ&#xff9e;は[ア&#x3099;](https://ja.wikipedia.org/wiki/%E3%81%82%E3%82%99)に修正
    *   例：ﾂ&#xff9f;は[ツ&#x309a;](https://ja.wikipedia.org/wiki/%E3%83%84%E3%82%9C)に修正

## Changelog

See [Releases page](https://github.com/textlint-ja/textlint-rule-no-hankaku-kana/releases).

## Further Reading

- [半角カナ - Wikipedia](https://ja.wikipedia.org/wiki/%E5%8D%8A%E8%A7%92%E3%82%AB%E3%83%8A "半角カナ - Wikipedia")
- [JTF日本語標準スタイルガイド](https://github.com/azu/textlint-rule-preset-JTF-style "JTF日本語標準スタイルガイド") 2.1.5 カタカナ

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/textlint-ja/textlint-rule-no-hankaku-kana/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu
