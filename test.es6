import tape from 'tape'
import copyCanvas from './'

let canvas = null
let ctx = null

function test (description, fn) {
  tape(description, function (t) {

    // beforeEach
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')

    // draw a triangle
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(200, 20)
    ctx.lineTo(120, 120)
    ctx.closePath()
    ctx.stroke()

    // test
    fn(t)

    // afterEach
    canvas = null
  })
}
test('should create copy with same dimensions', function (t) {
  let copy = copyCanvas(canvas)
  t.deepEqual([copy.width, copy.height], [canvas.width, canvas.height])
  t.end()
})

test('should accurately copy canvas content', function (t) {
  let copy = copyCanvas(canvas)
  t.equal(copy.toDataURL('image/png'), canvas.toDataURL('image/png'))
  t.end()
})
