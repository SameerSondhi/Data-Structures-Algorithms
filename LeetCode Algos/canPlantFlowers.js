var canPlaceFlowers = function(flowerbed, n) {
    let numOfZeroes = 0;
    let canPlace = false;
    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i]===0){
            numOfZeroes++
        }
        if(numOfZeroes-n>=2){
            canPlace=true
        }
    }
    return canPlace
}

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2)) 
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2))