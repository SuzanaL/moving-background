const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDHT = canvas.width = 600;
const canvas_HEIGHT = canvas.height = 500;
let gameSpeed = 3;

const backgroundLayer = new Image();
backgroundLayer.src = 'img/fundo_game.jpg';

class Layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2200;
        this.height = 500;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * speedModifier;
        
    }

    update(){
        this.speed = gameSpeed * this.speedModifier;
        
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }

        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);

    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}


const layer = new Layer(backgroundLayer, 0.5);

/*create animation loop*/
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDHT, canvas_HEIGHT);
    /*ctx.drawImage(backgroundLayer, x, 0);
    ctx.drawImage(backgroundLayer, x2, 0);
    if(x < -2200) x = 2200 + x2 - gameSpeed;
    else x -= gameSpeed;

    if(x2 < -2200) x2 = 2200 + x - gameSpeed;
    else x2 -= gameSpeed;*/
    layer.update();
    layer.draw();
    requestAnimationFrame(animate);
};

animate();
