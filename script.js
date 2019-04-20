const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let max = 1

canvas.width = ctx.width = window.innerWidth
canvas.height = ctx.height = window.innerHeight

ctx.lineWidth = 1

const panX = 0
const panY = 0
const mag = 1500
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
  
  const total = real * imaginary
  
  if (total < max * 2) {
    if (total < -1500) {
      ctx.fillStyle = 'rgb(1, 1, 1)'
    } else if (total < -150) {
      ctx.fillStyle = 'rgb(20, 200, 20)'
    } else if (total < -70) {
      ctx.fillStyle = 'rgb(1, 1, 1)'
    } else if (total < -30) {
      ctx.fillStyle = 'rgb(80, 150, 220)'
    } else if (total < -5) {
      ctx.fillStyle = 'rgb(20, 140, 230)'
    } else if (total < 0.001) {
      ctx.fillStyle = 'rgb(25, 130, 220)'  
    } else if (total < 0.01) {
      ctx.fillStyle = 'rgb(20, 220, 220)'
    } else if (total < 0.1) {
      ctx.fillStyle = 'rgb(220, 20, 100)' 
    } else {
      ctx.fillStyle = 'rgb(10, 180, 220)'  
    }
    ctx.fillRect(z * 1500, i * 1500, 1, 1)
  }
}

function render() {
 // for (let x = 0; x < canvas.width; x++) {
 //   for (let y = 0; y < canvas.height; y++) {
      checkSet(Math.random() * ctx.width / mag - panX, Math.random() * ctx.height / mag - panY)
 //   }
//  }
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
  
  requestAnimationFrame(loop)
}

loop()