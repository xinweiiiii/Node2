maxage = 100
function calculateSupply(age, amount){
    rest_of_life = (100 - age) * 365 * amount
    console.log("You will need " + rest_of_life + " to last you until the ripe old age of " + maxage)
}
calculateSupply(22,2)
calculateSupply(21,5)
calculateSupply(25,8)