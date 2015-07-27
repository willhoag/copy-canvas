# copy-canvas

a more symantic way to duplicate an html5 canvas

[![Build Status](https://travis-ci.org/willhoag/copy-canvas.svg)](https://travis-ci.org/willhoag/copy-canvas)
[![npm version](https://badge.fury.io/js/copy-canvas.svg)](http://badge.fury.io/js/copy-canvas)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install copy-canvas --save
```

## Usage

```js
// require module
var copyCanvas = require('copy-canvas');

// create canvas
let canvas = document.createElement('canvas')

// draw a circle
let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(150, 100, 50, 0, 2 * Math.PI)
ctx.stroke()

// copy canvas
let copy = copyCanvas(canvas)

// verify
let copyData = copy.toDataURL('image/png')
let canvasData = canvas.toDataURL('image/png')
copyData === canvasData // true
copy.width === canvas.width // true
copy.height === canvas.height // true
```

## API

`copyCanvas(canvas)`
provided a canvas, returns a new canvas copy

## License

MIT
