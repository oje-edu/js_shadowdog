/** @type {HTMLCanvasElement} */
const canvas5 = document.getElementById('canvas5')
const ctx5 = canvas5.getContext('2d')
CANVAS_WIDTH = canvas5.width = 400
CANVAS_HEIGHT = canvas5.height = 1000

const numberOfEnemies5 = 20;

const enemiesArray5 = []

let gameFrame5 = 0


class Enemy5 {
  constructor() {
    this.image = new Image()
    this.image.src = './assets/sprites/enemies/enemy4.png'
    this.speed = Math.random() * 4 + 1
    this.spriteWidth = 213
    this.spriteHeight = 213
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.x = Math.random() * (canvas5.width - this.width)
    this.y = Math.random() * (canvas5.height - this.height)
    this.newX = Math.random() * canvas5.width
    this.newY = Math.random() * canvas5.height
    this.frame5 = 0
    this.flapSpeed5 = Math.floor(Math.random() * 3 + 1)
    this.interval = Math.floor(Math.random() * 200 + 50)
  }
  update() {
    if (gameFrame5 % this.interval === 0) {
      this.newX = Math.random() * (canvas5.width - this.width)
      this.newY = Math.random() * (canvas5.height - this.height)
    }
    let dx = this.x - this.newX
    let dy = this.y - this.newY
    this.x -= dx / 20
    this.y -= dy / 20

    if (this.x + this.width < 0) this.x = canvas5.width;

    // this.y += Math.random() * 5 - 2.5
    if (gameFrame5 % this.flapSpeed5 === 0) {
      // ternary operator
      this.frame5 > 4 ? this.frame5 = 0 : this.frame5++
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx5.drawImage(
      this.image,
      this.frame5 * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x, this.y,
      this.width, this.height
    )
  }
}


for (let i = 0; i < numberOfEnemies5; i++) {
  enemiesArray5.push(new Enemy5())
}

function animate5() {
  ctx5.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray5.forEach(enemy => {
    enemy.update()
    enemy.draw()
  })
  gameFrame5++
  requestAnimationFrame(animate5)
}

animate5()