# rapid-config-dev [<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Colorwheel" width="90" height="90" align="right">][rapid]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]

[rapid-config-dev] is a shareable configuration package for [rapid].

## Install

Add [rapid] and [rapid-config-dev] to your project:

```sh
npm install --save-dev rapid rapid-config-dev
```

Then, add this configuration to your `package.json`:

```json
{
  "rapid": {
    "extends": "dev"
  }
}
```

[npm-url]: https://www.npmjs.com/package/rapid-config-dev
[npm-img]: https://img.shields.io/npm/v/rapid-config-dev.svg
[cli-url]: https://travis-ci.org/jonathantneal/rapid-config-dev
[cli-img]: https://img.shields.io/travis/jonathantneal/rapid-config-dev.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/rapid-config-dev.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[rapid]: https://github.com/jonathantneal/rapid
[rapid-config-dev]: https://github.com/jonathantneal/rapid-config-dev
