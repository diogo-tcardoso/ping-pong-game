class Pad {
    constructor(ctx, keyboard){
        this.ctx = ctx;
        this.keyboard = keyboard;
        this.x = 10
        this.y = 200
        this.speed = 3
        this.width = 20
        this.height = 100
    }

    toManager(canvasWidth, canvasHeight) {
        if (this.keyboard.left && this.x > 0) {
            this.x -= this.speed;
        }
        if (this.keyboard.right && this.x < canvas.width/2 - this.width) {
            this.x += this.speed;
        }
        if (this.keyboard.up && this.y > 0) {
            this.y -= this.speed;
        }
        if (this.keyboard.down && this.y < canvas.height - this.height) {
            this.y += this.speed;
        }
    }
    toDraw(){
        this.toManager();
        this.ctx.fillStyle = "#00f"
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}