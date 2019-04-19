const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = ctx.width = 500
canvas.height = ctx.height = 200

ctx.lineWidth = 1

const C = 0.1
let z = Math.random()
let i = Math.random()
let panX = 1.5
let panY = 1.5
const mag = 200

function draw() {
  z = z * z - i * i + z
  i = 2 * z * i + i
  
  if (z * i < 5) {
    ctx.fillRect(z / mag - panX, i / mag - panY, 1, 1)
  } else {
    z = Math.random()
    i = Math.random()
  }
}

function render() {
  for (let x = 0; x < 10; x++) {
    draw()
  }
}

render()