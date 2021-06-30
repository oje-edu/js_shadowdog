/** @type {HTMLCanvasElement} */
const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')
CANVAS_WIDTH = canvas2.width = 400
CANVAS_HEIGHT = canvas2.height = 1000

const numberOfEnemies2 = 100;

const enemiesArray2 = []

let gameFrame2 = 0


class Enemy2 {
  constructor() {
    this.image = new Image()
    this.image.src = './assets/sprites/enemies/enemy1.png'
    //this.speed = Math.random() * 4 - 2
    this.spriteWidth = 293
    this.spriteHeight = 155
    this.width = this.spriteWidth / 2.5
    this.height = this.spriteHeight / 2.5
    this.x = Math.random() * (canvas2.width - this.width)
    this.y = Math.random() * (canvas2.height - this.height)
    this.frame2 = 0
    this.flapSpeed2 = Math.floor(Math.random() * 3 + 1)
  }
  update() {
    //this.x += this.speed
    this.x += Math.random() * 15 - 7.5
    //this.y += this.speed
    this.y += Math.random() * 5 - 2.5
    if (gameFrame2 % this.flapSpeed2 === 0) {
      // ternary operator
      this.frame2 > 4 ? this.frame2 = 0 : this.frame2++
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx2.drawImage(
      this.image,
      this.frame2 * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x, this.y,
      this.width, this.height
    )
  }
}


for (let i = 0; i < numberOfEnemies2; i++) {
  enemiesArray2.push(new Enemy2())
}

function animate2() {
  ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray2.forEach(enemy => {
    enemy.update()
    enemy.draw()
  })
  gameFrame2++
  requestAnimationFrame(animate2)
}

animate2()