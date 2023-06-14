const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');



ctx.fillStyle = "grey"
ctx.fillRect(50, 50, 500, 75)
ctx.fillRect(50, 200, 500, 37)
ctx.fillRect(50, 300, 500, 37)


ctx.lineWidth = 3;
ctx.strokeStyle = "darkgreen"
ctx.strokeRect(50, 50, 500, 75)
ctx.strokeRect(50,200,500,37)
ctx.strokeRect(50,300,500,37)

//clearRect()
ctx.clearRect(70, 85, 30, 4)
ctx.clearRect(150, 85, 30, 4)
ctx.clearRect(230, 85, 30, 4)
ctx.clearRect(310, 85, 30, 4)
ctx.clearRect(390, 85, 30, 4)
ctx.clearRect(470, 85, 30, 4)


// const player = {
//     w:60,
//     h: 60,
//     x: 250,
//     y: 400,
//     speed: 3,
//     dx: 0,
//     dy: 0,
// }
   

class Player {
    constructor(x, y, speed, direction, imageSrc) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.img = new Image();
        this.img.src = "./images/Turtleplayer.png" ;
        this.width = 60;
        this.height = 40;
      }
       drawPlayer() {
        // Draw the car image on the canvas
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } }

        // const player = new Player (250, 300, 3)





function drawPlayer(){
    player.drawPlayer()
}

    function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height)       
    }

    function newPos() {
        player.x += player.dx;
        player.y += player.dy

    }

 

    function detectWalls () {
        //Left wall
        if(player.x < 0) {
          player.x = 0; 
        } 

// right wall
        if(player.x + player.w >canvas.width ){
        player.x = canvas.width - player.w;
        }

        //top wall
        if (player.y <0) {
            player.y = 0
        }


        //bottom wall
        if(player.y + player.h > canvas.height) {
            player.y = canvas.height - player.h
        }

}

const player = new Player (250, 300, 3)



function update(){
    clear();
    ctx.fillStyle = "grey"
    ctx.fillRect(50, 50, 500, 75)
    ctx.fillRect(50, 200, 500, 37)
    ctx.fillRect(50, 300, 500, 37)

    ctx.lineWidth = 3;
    ctx.strokeStyle = "darkgreen"
    ctx.strokeRect(50, 50, 500, 75)
    ctx.strokeRect(50,200,500,37)
    ctx.strokeRect(50,300,500,37) 
    
    
    ctx.clearRect(70, 85, 30, 4)
ctx.clearRect(150, 85, 30, 4)
ctx.clearRect(230, 85, 30, 4)
ctx.clearRect(310, 85, 30, 4)
ctx.clearRect(390, 85, 30, 4)
ctx.clearRect(470, 85, 30, 4)

    
    // drawPlayer();



    player.drawPlayer()

    detectWalls();

    newPos();

   

    requestAnimationFrame(update)
}

function moveUp (){
    player.dy = - player.speed;
}

function moveDown (){
    player.dy = player.speed;
}

function moveRight (){
    player.dx = player.speed;
}

function moveLeft (){
    player.dx = - player.speed;
}


function keyDown(e) {
    if(e.key === "ArrowDown") {
        moveDown();
    } else if(e.key  === "ArrowUp") {
        moveUp();
    }else if(e.key  === "ArrowRight") {
        moveRight();
    }else if(e.key  === "ArrowLeft") {
        moveLeft();   
    }
}

    function keyUp(e) {
        if (
         e.key == "ArrowDown"   || 
         e.key == "ArrowUp"   ||
         e.key == "ArrowLeft"  ||
         e.key == "ArrowRight"  
        ) {
        player.dx = 0;
        player.dy = 0;
        }
    }
    



update();

document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)



// class Car {
//     constructor(x, y, speed, direction, imageSrc) {
//       this.x = 60; // x-coordinate of the car
//       this.y = 60; // y-coordinate of the car
//       this.speed = 3; // speed of the car
//       this.direction = moveRight && moveLeft; // direction of the car ("right" or "left")
//       this.image = carImage;
//       this.image.src = imageSrc; // image source of the car
//       this.width = 60;
//       this.height = 60;
//     }
// }

// function drawCar () {
//     ctx.drawImage(this.image.Car, this.x, this.y, this.width. this.height)
// }

// const carImage = document.getElementById("source2"); 
// const car = new Car(100, 100, 2, "right", carImage.src)


// drawCar()


class Car {
    constructor(x, y, speed, direction, imageSrc) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.direction = direction;
      this.image = new Image();
      this.image.src = "./images/yellow-car.png" ;
      this.width = 60;
      this.height = 40;
    }
     drawCar() {
      
        // Draw the car image on the canvas
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
      
      // Call the drawCar function with the canvas ID and image ID
      
 }
  
  
  










// //Animation 1 

// const circle = {
//     x: 100,
//     y: 50,
//     size: 20,
//     dx: 5,
//     dy: 4
// }


// function drawCircle(){
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI*2)
//     ctx.fillStyle = "red"
//     ctx.fill()
// }

// function animate (){
//     ctx.clearRect(0,0, canvas.canvas , canvas.heaight)
    
    
//     drawCircle();
//     circle.x +=circle.dx
//     circle.y += circle.dy


//     requestAnimationFrame(animate)



// }




// drawCircle()










// //fillText()
// ctx.font = "30px CenturyGothic"
// ctx.fillStyle = "purple"
// ctx.fillText("Hello World, 400, 100")

// //strokeText()
// ctx.lineWidth = 1
// ctx.strokeText("Hello World", 400, 100)








// const road = {


//     y: 20,
//     width: 100,
//     height: 30,
//     color: "gray",
//     draw(rectValue) {
//         ctx.fillStyle = this.color
//         ctx.fillRect(0, (rectValue * this.height), this.width, this.height)
//     }
// }

//     function drawRoad(rectValue){
//         ctx.clearRect(0, 0, canvas.width, canvas.height)
//         road.draw(rectValue)
//     }
//     for (let i = 1 ; i <= 8 ; i++) {
//         drawRoad (i)
//      console.log("this is road number", i)
//     }   

//     ;





