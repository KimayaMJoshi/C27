class Chain {
    constructor(firstBody, secondBody){
        var options ={

            bodyA : firstBody,
            bodyB : secondBody,
            stiffness: 0.05,
            length: 200

        }
        
            this.chain = Constraint.create(options);
            console.log(this.chain.bodyA)
            World.add(world, this.chain);


    }

    display(){

        
        //line(x1,y1, x2,y2)
        strokeWeight(5);
        

        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
            this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    };




};