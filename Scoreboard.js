class Scoreboard{
    constructor(ctx){
        this.ctx = ctx;
        this.screenRight = this.ctx.canvas.width;
        this.margin = 10;
        this.width = 100;
    }
    toScoreboardDraw(){
        this.ctx.font = "70px arial"
        this.ctx.fillStyle = "#000"
        this.ctx.fillText(player1, this.margin, this.margin + 70, this.width);
        this.ctx.fillText(player2, this.screenRight-this.margin - 35, this.margin + 70, this.width);
    }
}