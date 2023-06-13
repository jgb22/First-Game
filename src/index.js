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

const image = document.getElementById("source")

const player = {
    w:60,
    h: 60,
    x: 250,
    y: 400,
    speed: 5,
    dx: 0,
    dy: 0,
}
   
function drawPlayer (){
    ctx.drawImage(image, player.x, player.y, player.w, player.h)
}

function animate(){
    drawPlayer();
}

animate();















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





