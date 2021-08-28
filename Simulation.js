class Simulation {
    //tengo problemas con github  
    constructor(){
        this.Runner1 = 0;
        this.Runner2 = 0;
        this.track1 = [];
        this.track2 = [];
        console.log(this.Race());
    }

    Dice(){
        return Math.floor( Math.random()*6 + 1);
      }
    Chances(probability){
        if( probability == 3) {
            return 3;
        } else if(probability < 3) {
            return 1;
        } else if( probability > 3)
            return 2;
    }
    Race(){
        for(let i = 0; i=100; i++){
            let throw1 = this.Dice();
            let throw2 = this.Dice();
            this.Runner1 += this.Chances(throw1);
            this.Runner2 += this.Chances(throw2);
            if(this.Runner1 >= 100 && this.Runner2 >= 100){
                i = 100 
                return "It´s a tie";
            } else if( this.Runner1 >= 100 && this.Runner2 < 100) {
                i = 100
                return "Runner 1 WINS!";
            }else if( this.Runner2 >=100 && this.Runner1 <100) {
                i = 100 
                return "Runner 2 WINS!"
            }
        }
    }
}

new Simulation;
