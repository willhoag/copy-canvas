// require module
import copyCanvas from './'

// create a canvas
let canvas = document.createElement('canvas')

// draw a circle
let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(150, 100, 50, 0, 2 * Math.PI)
ctx.stroke()

// copy canvas
let copy = copyCanvas(canvas)
