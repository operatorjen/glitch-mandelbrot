const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const maxVal = document.querySelector('#max')

let max = 100

maxVal.onblur = maxVal.onchange = function () {
  max = parseInt(this.value, 10)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  render()
}

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 1

const panX = 0.5
const panY = 0.5
const mag = 1000
let counter = 1

function checkSet(z, i) {
  let real = z
  let imaginary = i
  
  for (let j = 0; j < max; j++) {
    let tmpZ = (real * real) - (imaginary * imaginary) + z
    let tmpI = (2 * real * imaginary) + i
    real = tmpZ
    imaginary = tmpI
  }
  
  if (real * imaginary < max) {
   // console.log(z * 100, i * 100)
    if (real * imaginary < max) {
      ctx.fillStyle = 'rgb(1, 1, 1)'
    } else if (real * imaginary < (max + 2)) {
      ctx.fillStyle = 'rgb(55, 120, 200)'  
    }
    ctx.fillRect(z * 1000, i * 1000, 1, 1)
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      checkSet(x / mag - panX, y / mag - panY)
    }
  }
}

let switchs = false

function loop() {
  if (!switchs) {
    max--
  } else {
    max++
  }
  if (max > 100 || max < 1) {
    switchs = !switchs 
  }
  
  render()
  
  requestAnimationFrame(loop, 100)
}

loop()