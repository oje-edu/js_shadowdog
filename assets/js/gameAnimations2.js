/** @type {HTMLCanvasElement} */
const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')
CANVAS_WIDTH = canvas3.width = 400
CANVAS_HEIGHT = canvas3.height = 1000

const numberOfEnemies3 = 20;

const enemiesArray3 = []

let gameFrame3 = 0


class Enemy3 {
  constructor() {
    this.image = new Image()
    this.image.src = './assets/sprites/enemies/enemy2.png'
    this.speed = Math.random() * 4 + 1
    this.spriteWidth = 266
    this.spriteHeight = 188
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.x = Math.random() * (canvas3.width - this.width)
    this.y = Math.random() * (canvas3.height - this.height)
    this.frame3 = 0
    this.flapSpeed3 = Math.floor(Math.random() * 3 + 1)
    this.angle = 0
    this.angleSpeed = Math.random() * 0.2
    this.curve = Math.random() * 10
  }
  update() {
    this.x -= this.speed
    // this.x += Math.random() * 15 - 7.5
    if (this.x + this.width < 0) this.x = canvas3.width;
    this.y += this.curve * Math.sin(this.angle)
    this.angle += this.angleSpeed
    // this.y += Math.random() * 5 - 2.5
    if (gameFrame3 % this.flapSpeed3 === 0) {
      // ternary operator
      this.frame3 > 4 ? this.frame3 = 0 : this.frame3++
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx3.drawImage(
      this.image,
      this.frame3 * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x, this.y,
      this.width, this.height
    )
  }
}


for (let i = 0; i < numberOfEnemies3; i++) {
  enemiesArray3.push(new Enemy3())
}

function animate3() {
  ctx3.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray3.forEach(enemy => {
    enemy.update()
    enemy.draw()
  })
  gameFrame3++
  requestAnimationFrame(animate3)
}

animate3()