# lcov-badge2

A tool for generating SVG badges from LCOV reports, based on [lcov-badge](https://github.com/freejosh/lcov-badge)

[![Build](https://github.com/stevenhair/lcov-badge2/actions/workflows/test.yml/badge.svg)](https://github.com/stevenhair/lcov-badge2/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/stevenhair/lcov-badge2/branch/master/graph/badge.svg?token=nb0yy1Y6zc)](https://codecov.io/gh/stevenhair/lcov-badge2)
[![npm](https://img.shields.io/npm/v/lcov-badge2.svg?maxAge=2592000)](https://www.npmjs.com/package/lcov-badge2)
[![downloads](https://img.shields.io/npm/dt/lcov-badge2.svg?maxAge=2592000)](https://www.npmjs.com/package/lcov-badge2)

## Usage

lcov-badge2 can be used as either a command line utility or a library.
It produces your basic build badge:

![example](https://raw.githubusercontent.com/stevenhair/lcov-badge2/master/example.svg)

### Command line usage

To use this library, just pass the path to your lcov file:

```bash
lcov-badge2 coverage/lcov.info
```

This will generate a `badge.svg` file. If you want an output file with a different name, you can pass
the `-o` option:

```bash
lcov-badge2 -o coverage.svg coverage/lcov.info
```

You can view all arguments by passing the `-h` option.

### Library usage

Here's an example of programmatic usage:

```typescript
import generateBadge from 'lcov-badge2';

const badge = generateBadge('coverage/lcov.info', 'coverage')
fs.writeFileSync('badge.svg', badge);
```
