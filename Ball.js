class Ball{
    constructor(ctx, player){
        this.ctx = ctx;
        this.moviment = false;
        this.player = player;
        this.dirX = -1;
        this.dirY = 0;
        this.speed = 3;
        this.width = 20;
        this.height = 20;
        this.x = (this.ctx.canvas.width/2) - (this.width/2);
        this.y = (this.ctx.canvas.height/2) - (this.height/2);
    }

    start(){
        this.moviment = true;
        this.dirY = (Math.random()*10 > 5 ? -1 : 1);
    }
    toBallManager(canvasWidth, canvasHeight){
        if(this.moviment){
            this.x += (this.dirX * this.speed)
            this.y += (this.dirY * this.speed)
            if(this.x >= (this.ctx.canvas.width - this.width)){
                this.dirX = -1
                player1++
                this.resetBall()
                this.start()
                this.dirX = -1
            }
            if(this.x <= 0){
                this.dirX = 1
                player2++
                this.resetBall()
                this.start()
                this.dirX = 1
            }
            if(this.y >= (this.ctx.canvas.height - this.height)){
                this.dirY *= -1
            }
            if(this.y <= 0){
                this.dirY *= -1
            }
            if(
                (this.x <= this.player.x + this.player.width && this.x + this.width >= this.player.x) &&
                (this.y + this.height >= this.player.y && this.y <= this.player.y + this.player.height)
            ){
                this.dirX *= -1; 
                this.dirY = ((this.y + (this.height / 2)) - (this.player.y + (this.player.height / 2))) / 40
            }
        }
    }

    resetBall(){
        this.moviment = false;
        this.x = (this.ctx.canvas.width/2) - (this.width/2);
        this.y = (this.ctx.canvas.height/2) - (this.height/2);
        player.x = 10;
        player.y = 200;
        cpu.x = (this.ctx.canvas.width - cpu.width) - 10
        cpu.y = (this.ctx.canvas.height / 2) - (cpu.height / 2)
    }

    toBallDraw(){
        this.toBallManager()
        this.ctx.fillStyle = "#0f0"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}