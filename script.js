const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const maxVal = document.querySelector('#max')

let max = 1

maxVal.onchange = function () {
  max = parseInt(this.value, 10)
  render()
}

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 1

const panX = 2.2
const panY = 1.2
const mag = 300
let counter = 1

function checkSet(z, i) {
  let real = z
  let imaginary = i
  
  for (let j = 0; j < 10; j++) {
    let tmpZ = (real * real) - (imaginary * imaginary) + z
    let tmpI = (2 * real * imaginary) + i
    real = tmpZ
    imaginary = tmpI
  }
  
  if (real * imaginary < max) {
   // console.log(z * 100, i * 100)
    ctx.fillRect(z * 1000, i * 1000, 2, 2)
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