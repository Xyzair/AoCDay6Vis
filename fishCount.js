class fishCount{
    fishBucket = new Array(9);
    history = new Array();
    days = 0;
    
    constructor(arr, days){
        for(var i = 0; i < 9; i++){
            this.fishBucket[i] = 0
        }

        arr.forEach(element => {
            this.fishBucket[element] += 1
        });
        this.days = days
    }

    getOutput(){
        this.history.push(this.fishBucket.map((x) => x))
        var fishBucket = this.fishBucket
        
        for(var i = 0; i < this.days; i++ ){
            var temp = 0
            temp = fishBucket.map((x) => x)[0]
            for(var j = 0; j < 8; j++){
                fishBucket[j] = fishBucket[j+1]
            }
            fishBucket[8] = (temp)
            fishBucket[6] += (temp)

            this.history.push(fishBucket.map((x) => x))
        }

        return this.history
    }

    getFishCount(day){
        var total = 0
        history[day+1].forEach(fish => {
            total += fish

        })
        console.log("FISH:", total)
    }

}