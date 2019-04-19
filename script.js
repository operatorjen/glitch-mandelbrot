const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = ctx.width = 500
canvas.height = ctx.height = 200

ctx.lineWidth = 1

const C = 0.1
let panX = 0
let panY = 0
const mag = 600

function checkSet(z, i) {
  let real = z
  let imaginary = i
  
  for (let j = 0; j < 10; j++) {
    z = z * z - i * i + z
    i = 2 * z * i + i
    real = z
    imaginary = i
  }
  
  if (real * imaginary < 5) {
    ctx.fillRect(z, i, 1, 1)
  }
}

function render() {
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      checkSet(x / mag - panX, y / mag - panY)
    }
  }
}

render()