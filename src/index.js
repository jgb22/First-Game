const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const startGame = document.querySelector("#startGame");
const startButton = document.querySelector("#startButton");

const endGame = document.querySelector("#game-over");
const restartButton = document.querySelector("#restartButton");

let frames = 0;
let score = 0;
let gameOver = false;
let gameStarted = false;

ctx.fillStyle = "black";
ctx.fillRect(100, 50, 500, 75);
ctx.fillRect(10, 200, 500, 37);
ctx.fillRect(50, 300, 500, 37);

ctx.lineWidth = 3;
ctx.strokeStyle = "darkgreen";
ctx.strokeRect(50, 50, 500, 75);
ctx.strokeRect(50, 200, 500, 37);
ctx.strokeRect(50, 300, 500, 37);

//clearRect()
ctx.clearRect(70, 55, 30, 10);

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "./src/images/bulbasaur.png";
    this.width = 70;
    this.height = 60;
    this.speedx = 0;
    this.speedy = 0;
  }
  drawPlayer() {
    ctx.save();

    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    const rotationAngle = Math.atan2(this.speedy, this.speedx);

    const adjustedAngle =
      this.speedx < 0 ? rotationAngle + Math.PI : rotationAngle;

    ctx.rotate(adjustedAngle);

    ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );

    ctx.restore(); // Restore the canvas state
  }
  newPos() {
    this.x += this.speedx;
    this.y += this.speedy;
  }
}

class Car {
  constructor(x, y, imageSrc) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "./src/images/purple-car.png";
    this.width = 80;
    this.height = 40;
    this.speedx = 0;
    this.speedy = 0;
  }
  drawCar() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    this.x += this.speedx;
    this.y += this.speedy;
  }
}

const player = new Player(400, 900, 3);

function drawPlayer() {
  player.drawPlayer();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function detectWalls() {
  //Left wall
  if (player.x < 0) {
    player.x = 0;
  }
  // right wall
  if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }

  //top wall
  if (player.y < 0) {
    player.y = 0;
    score += 1;
    document.getElementById("score").textContent = "Score: " + score;
  }

  //bottom wall
  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
  }
}

function update() {
  clear();
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, 660, 485);

  ctx.lineWidth = 3;
  ctx.strokeStyle = "darkgreen";
  ctx.strokeRect(0, 0, 640, 485);

  const lineSpacingX = 100;
  const lineSpacingY = 50;
  const lineSize = { width: 30, height: 4 };

  for (let x = 70; x < 580; x += lineSpacingX) {
    for (let y = 60; y < 385; y += lineSpacingY) {
      ctx.clearRect(x, y, lineSize.width, lineSize.height);
    }
  }

  //   Calling functions
  player.drawPlayer();

  player.newPos();

  detectWalls();

  updateObstacles();
  checkCollisions();

  frames++;

  if (gameStarted && !gameOver) {
    requestAnimationFrame(update);
  }
}

startButton.addEventListener("click", () => {
  startGame.style.display = "none";
  gameStarted = true; // Set the gameStarted flag to true
  update(); // Start the game loop
});

let req = requestAnimationFrame(update);

if (gameOver) {
  cancelAnimationFrame(req);
}

function moveUp() {
  player.speedy = -3;
}

function moveDown() {
  player.speedy = 3;
}

function moveRight() {
  player.speedx = 3;
}

function moveLeft() {
  player.speedx = -3;
  player.speedy = 0;
}

function keyDown(e) {
  if (e.key === "ArrowDown") {
    moveDown();
  } else if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  }
}

function keyUp(e) {
  if (
    e.key == "ArrowDown" ||
    e.key == "ArrowUp" ||
    e.key == "ArrowLeft" ||
    e.key == "ArrowRight"
  ) {
    player.speedx = 0;
    player.speedy = 0;
  }
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

//Random entering the Cars

const cars = [];

cars.push(new Car(40, 100, "./src/images/purple-car.png"));
cars.push(new Car(40, 200, "./src/images/yacht-car.png"));
cars.push(new Car(40, 300, "./src/images/green-car.png"));
cars.push(new Car(40, 300, "./src/images/grey-car.png"));
cars.push(new Car(40, 300, "./src/images/blue-car.png"));
cars.push(new Car(40, 300, "./src/images/yellow-car.png"));
cars.push(new Car(40, 300, "./src/images/brightgreen-car.png"));
cars.push(new Car(40, 300, "./src/images/red-car.png"));



const carImages = [
  "./src/images/purple-car.png",
  "./src/images/yacht-car.png",
  "./src/images/green-car.png",
  "./src/images/grey-car.png",
  "./src/images/blue-car.png",
  "./src/images/yellow-car.png",
  "./src/images/brightgreen-car.png",

  "./src/images/red-car.png",

];

function updateObstacles() {
  clear();

  ctx.fillStyle = "light pink";
  ctx.fillRect(00, 255, 1800, 490);

  ctx.lineWidth = 5;
  ctx.strokeStyle = "darkgreen";
  ctx.strokeRect(00, 255, 1800, 490);

  const lineSpacingX = 150;
  const lineSpacingY = 120;
  const lineSize = { width: 60, height: 7 };

  for (let x = 70; x < 1580; x += lineSpacingX) {
    for (let y = 70; y < 785; y += lineSpacingY) {
      ctx.clearRect(x, y, lineSize.width, lineSize.height);
    }
  }

  player.drawPlayer();

  for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    currentCar.x += 3;

    currentCar.drawCar();
  }
  if (frames % 30 == 0) {
    const minHeight = 300;
    const maxHeight = 700;
    const height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );

    const randomCarImage =
      carImages[Math.floor(Math.random() * carImages.length)];

    const car = new Car(80, height);
    car.image.src = randomCarImage;
    cars.push(car);
  }
}

clear();

function checkCollision(car) {
  if (
    player.x < car.x + car.width &&
    player.x + player.width > car.x &&
    player.y < car.y + car.height &&
    player.y + player.height > car.y
  ) {
    return true; // Collision detected
  }
  return false; // No collision
}

function checkCollisions() {
  for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    if (checkCollision(currentCar)) {
      gameOver = true;
      endGame.style.display = "block";
      return;
    }
  }
}

startButton.addEventListener("click", () => {
  startGame.style.display = "none";
});

restartButton.addEventListener("click", () => {
  endGame.style.display = "none";
});

update();
