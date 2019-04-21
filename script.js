const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let max = 100

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 10

const panX = 0
const panY = 0
const mag = 1000

function checkSet(z, i) {
  let real = z
  let imaginary = i
  
  for (let j = 0; j < max; j++) {
    let tmpZ = (real * real) - (imaginary * imaginary) + z + 0.1
    let tmpI = (2 * real * imaginary) + i - 0.8
    real = tmpZ
    imaginary = tmpI
  }
  
  const total = real * imaginary
  
  if (total < max) {
    if (total < -1500) {
      ctx.fillStyle = 'rgb(1, 1, 1, 0.3)'
    } else if (total < -550) {
      ctx.fillStyle = 'rgba(20, 100, 120, 0.95)'
    } else if (total < -170) {
      ctx.fillStyle = 'rgba(20, 120, 101, 0.95)'
    } else if (total < -30) {
      ctx.fillStyle = 'rgba(80, 50, 220, 0.96)'
    } else if (total < -5) {
      ctx.fillStyle = 'rgba(20, 140, 230, 0.5)'
    } else if (total < 0.001) {
      ctx.fillStyle = 'rgba(25, 130, 220, 0.96)'  
    } else if (total < 0.01) {
      ctx.fillStyle = 'rgba(220, 10, 220, 0.4)'
    } else if (total < 0.1) {
      ctx.fillStyle = 'rgba(220, 20, 100, 0.97)' 
    } else {
      ctx.fillStyle = 'rgba(10, 140, 220, 0.5)'  
    }
    ctx.fillRect(z * 1000, i * 1000, 0.5, 0.5)
  }
}

function render() {
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
  if (max > 150 || max < 1) {
    switchs = !switchs 
  }
  
  render()
  
  requestAnimationFrame(loop)
}

loop()