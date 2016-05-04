# textlint-rule-no-hankaku-kana [![Build Status](https://travis-ci.org/azu/textlint-rule-no-hankaku-kana.svg?branch=master)](https://travis-ci.org/azu/textlint-rule-no-hankaku-kana)

textlint rule that disallow to use 半角カタカナ.

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

## Changelog

See [Releases page](https://github.com/azu/textlint-rule-no-hankaku-kana/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/azu/textlint-rule-no-hankaku-kana/issues).

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
