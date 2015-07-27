import createCanvas from 'create-canvas'
import drawToCanvas from 'draw-to-canvas'

export default function copyCanvas (canvas) {
  return drawToCanvas(canvas, createCanvas(canvas.width, canvas.height))
}
