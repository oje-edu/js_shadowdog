/** @type {HTMLCanvasElement} */
const canvas4 = document.getElementById('canvas4')
const ctx4 = canvas4.getContext('2d')
CANVAS_WIDTH = canvas4.width = 400
CANVAS_HEIGHT = canvas4.height = 1000

const numberOfEnemies4 = 50;

const enemiesArray4 = []

let gameFrame4 = 0


class Enemy4 {
  constructor() {
    this.image = new Image()
    this.image.src = './assets/sprites/enemies/enemy3.png'
    this.speed = Math.random() * 4 + 1
    this.spriteWidth = 218
    this.spriteHeight = 177
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.x = Math.random() * (canvas4.width - this.width)
    this.y = Math.random() * (canvas4.height - this.height)
    this.frame4 = 0
    this.flapSpeed4 = Math.floor(Math.random() * 3 + 1)
    this.angle = Math.random() * 500
    this.angleSpeed = Math.random() * 0.5 + 0.5
    //this.curve = Math.random() * 200 + 50
  }
  update() {
    this.x = canvas4.width / 2 * Math.sin(this.angle * Math.PI / 90) + (canvas4.width / 2 - this.width / 2)
    // this.x += Math.random() * 15 - 7.5
    if (this.x + this.width < 0) this.x = canvas4.width;
    this.y = canvas4.height / 2 * Math.cos(this.angle * Math.PI / 450) + (canvas4.height / 2 - this.height / 2)
    this.angle += this.angleSpeed
    // this.y += Math.random() * 5 - 2.5
    if (gameFrame4 % this.flapSpeed4 === 0) {
      // ternary operator
      this.frame4 > 4 ? this.frame4 = 0 : this.frame4++
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx4.drawImage(
      this.image,
      this.frame4 * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x, this.y,
      this.width, this.height
    )
  }
}


for (let i = 0; i < numberOfEnemies4; i++) {
  enemiesArray4.push(new Enemy4())
}

function animate4() {
  ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray4.forEach(enemy => {
    enemy.update()
    enemy.draw()
  })
  gameFrame4++
  requestAnimationFrame(animate4)
}

animate4()