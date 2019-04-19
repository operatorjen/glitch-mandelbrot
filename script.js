const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = ctx.width = 500
canvas.height = ctx.height = 200

ctx.lineWidth = 1

const C = 0.0
let z = Math.random()
let i = Math.random()

function draw() {
  z = z * z - i * i + z
  i = 2 * z * i + i
  
  if (z * i < 5) {
    ctx.fillRect(z, i, 1, 1)
  }
}

function render() {
  draw()
  requestAnimationFrame(render)  
}