const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

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
    let tmpZ = (real * (Math.sin(counter/11) + real)) - (imaginary * (Math.sin(counter/10) + imaginary)) + z
    let tmpI = (2 * real * imaginary) + i
    real = tmpZ
    imaginary = tmpI
  }
  
  const total = real * imaginary
  
  if (total < max * 2) {
    if (total < -1500) {
      ctx.fillStyle = 'rgb(1, 1, 1, 0.3)'
    } else if (total < -150) {
      ctx.fillStyle = 'rgba(20, 200, 20, 0.5)'
    } else if (total < -70) {
      ctx.fillStyle = 'rgba(20, 120, 101, 0.5)'
    } else if (total < -30) {
      ctx.fillStyle = 'rgba(80, 150, 220, 0.6)'
    } else if (total < -5) {
      ctx.fillStyle = 'rgba(20, 140, 230, 0.5)'
    } else if (total < 0.001) {
      ctx.fillStyle = 'rgba(25, 130, 220, 0.6)'  
    } else if (total < 0.01) {
      ctx.fillStyle = 'rgba(20, 220, 220, 0.4)'
    } else if (total < 0.1) {
      ctx.fillStyle = 'rgba(220, 20, 100, 0.7)' 
    } else {
      ctx.fillStyle = 'rgba(10, 180, 220, 0.5)'  
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
  counter++;

  if (!switchs) {
    max --
  } else {
    max ++
  }
  if (max > 100 || max < 1) {
    switchs = !switchs 
  }
  
  render()
  
  requestAnimationFrame(loop)
}

loop()