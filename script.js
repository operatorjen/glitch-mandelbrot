const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const maxVal = document.querySelector('#max')

let max = 100

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 1

const panX = 0
const panY = 0
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
  
  const total = real * imaginary * 100
  
  if (total < max * 2) {
    //maxVal.value = total
    if (total < -30) {
      ctx.fillStyle = 'rgb(1, 1, 1)'
    } else if (total < -10) {
      ctx.fillStyle = 'rgb(180, 50, 220)'
    } else if (total < -5) {
      ctx.fillStyle = 'rgb(20, 140, 230)'
    } else if (total < 0) {
      ctx.fillStyle = 'rgb(225, 30, 200)'  
    } else if (total < 15) {
      ctx.fillStyle = 'rgb(205, 20, 220)'
    } else if (total < 30) {
      ctx.fillStyle = 'rgb(180, 20, 200)' 
    } else {
      ctx.fillStyle = 'rgb(10, 180, 220)'  
    }
    ctx.fillRect(z * 1000, i * 1000, 2, 2)
  }
}

function render() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      checkSet(x / mag - panX, y / mag - panY)
    }
  }
}

let switchs = false

function loop() {
  if (!switchs) {
    max --
  } else {
    max ++
  }
  if (max > 100 || max < 1) {
    switchs = !switchs 
  }
  
  render()
  
  requestAnimationFrame(loop, 10)
}

loop()