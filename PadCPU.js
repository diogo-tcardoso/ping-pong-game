class PadCPU {
    constructor(ctx, ball){
        this.ctx = ctx;
        this.ball = ball;
        this.speed = 2.5
        this.width = 20
        this.height = 100
        this.x = (this.ctx.canvas.width - this.width) - 10
        this.y = (this.ctx.canvas.height / 2) - (this.height / 2)
        this.startX = this.x
        this.startY = this.y
        this.middleY = Math.random() * this.height
    }

    toPadCPUManager(canvasWidth, canvasHeight) {
        if(this.ball.dirX > 0 && this.ball.x > this.ctx.canvas.width/2){
            if(this.ball.y + (this.ball.height / 2) > this.y + this.middleY){
                this.y += this.speed
            }
            if(this.ball.y + (this.ball.height / 2) < this.y + this.middleY){
                this.y -= this.speed
            }
            if (this.ball.x + this.ball.width < this.x){
                this.x -= this.speed
            }
        }else{
            if (this.y > this.startY){
                this.y -= this.speed
            }
            if (this.y < this.startY){
                this.y += this.speed
            }
            if (this.x > this.startX){
                this.x -= this.speed
            }
            if (this.x < this.startX){
                this.x += this.speed
            }
        }
    }

    toCollision(){
        if (this.x < canvas.width / 2) {
            this.x += this.speed;
        }
        if (this.x > canvas.width - this.width) {
            this.x -= this.speed;
        }
        if (this.y > 0) {
            this.y -= this.speed;
        }
        if (this.y < canvas.height - this.height) {
            this.y += this.speed;
        }
        if(
            (this.x <= this.ball.x + this.ball.width && this.x + this.width >= this.ball.x) &&
            (this.y + this.height >= this.ball.y && this.y <= this.ball.y + this.ball.height)
        ){
            this.ball.dirX = -1; 
            this.ball.dirY = ((this.ball.y + (this.ball.height / 2)) - (this.y + (this.height / 2))) / 40
            this.middleY = Math.random() * this.height
        }
    }

    toPadCPUDraw(){
        this.toPadCPUManager();
        this.toCollision();
        this.ctx.fillStyle = "#f00"
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}