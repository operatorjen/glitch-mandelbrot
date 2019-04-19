const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 1

const panX = 2
const panY = 1.5
const mag = 500

function checkSet(z, i) {
  let real = z
  let imaginary = i
  
  for (let j = 0; j < 100; j++) {
    let tmpZ = real * real - imaginary * imaginary + z
    let tmpI = 2 * real * imaginary + i
    real = tmpZ
    imaginary = tmpI
  }
  
  if (real * imaginary < 5) {
    ctx.fillRect(z * 200, i * 200, 1, 1)
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