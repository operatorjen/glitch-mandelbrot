const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = ctx.width = 500
canvas.height = ctx.height = 200

ctx.lineWidth = 1

const C = 0.0
let current = 0.0

function draw() {
  current = z^2 + C
  ctx.fillRect(x, y, width, height)
}

function render() {
  draw()
  requestAnimationFrame(render)  
}