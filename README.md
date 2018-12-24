# csv normalizer

A tool that reads a CSV formatted file on stdin and emits a normalized CSV formatted file on stdout.

Table of contents:
- [installing dependencies](#installing-dependencies)
- [running this utility](#running-this-utility)
  - [running without global installation](#running-without-global-installation)
  - [installing globally](#installing-globally)
- [running tests](#running-tests)
  - [from command line](#from-command-line)
  - [from recommended IDE (VSCode)](#from-recommended-ide-vscode)
- [dev notes](#dev-notes)
  - [tooling notes](#tooling-notes)

- - -


## installing dependencies

You will need Node.js 8.0.0+ installed to run this utility or work with this code. If you don't already have Node installed, you can [download an installer here](https://nodejs.org/en/download/).

To install dependencies, run the following command from package root:

```
npm i
```

- - -

<div align="right">^ <a href="#csv-normalizer">top</a> ^</div>


## running this utility

### running without global installation

You can run this utility right from package root with the command:
```bash
cat sample.csv | node src
```

If you run into permission errors, you can try running the getPerms script (`npm run getPerms`). You can also resolve them by installing globally with the following instructions.

### installing globally

Run this command from project root:
```bash
npm i -g .
```

The recommended usage is to pipe an input file into the command:
```bash
cat sample.csv | csv-normalize
```

- - -

<div align="right">^ <a href="#csv-normalizer">top</a> ^</div>


## running tests

### from command line

To run the full suite of tests, use command:
```bash
npm test
```

This will output verbose tests. If you prefer not to read passing test descriptions, prefer command:
```bash
npm run nyan
```

Scope the tests down from within a test file with a `.only`, eg
```js
describe.only('this set of tests', () => {
    // the only tests you want to run
});
```

### from recommended IDE (VSCode)

Select your preferred test profile, either:
- `Run all tests`, or
- `Run Active UI tab test file`.

Then hit F5.

You can use the `.only` modifier here as well. In that case, I find the `Run all tests` profile more convenient.

- - -

<div align="right">^ <a href="#csv-normalizer">top</a> ^</div>


## dev notes

The spec said not to spend more than 4 hours on this exercise. Because I have not worked much with encoding before, I read several articles about the differences between UTF-8, various UTF-16s, and UTF-32. At the end of this reading and after several experiments in the console, as far as I can tell:

- Because JavaScript's String implementation is UCS-2 or UTF-16 and the predominant encoding of the web is UTF-8, it already handles automatically for replacing unknown or invalid unicode code points (& bytes representing such) with `\uFFFD`, the unicode replacement character, as part of the engine's on-the-fly UTF-8 <-> UTF-16 conversions.

So I have left the JavaScript engine to handle this part of the spec for me.

<!--

reminder refs in case manual unicode processing is necessary at a later stage:

https://stackoverflow.com/questions/44565859/how-does-utf-8-encoding-identify-single-byte-and-double-byte-characters

https://en.wikipedia.org/wiki/Specials_(Unicode_block)

https://mathiasbynens.be/notes/javascript-encoding

-->

### tooling notes

This was developed on Mac OS 10.14.2 with Node 11.4.0 and tested on the same OS with Node 8.0.0, 10.0.0, and 11.4.0. I've committed my `launch.json` so any other VSCode users would have an easy time running tests. Were this production code, I would only do this if VSCode were the recommended / preferred team IDE. For purposes of this coding challenge, I chose to consider it as such.

- - -

<div align="right">^ <a href="#csv-normalizer">top</a> ^</div>
