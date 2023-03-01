function sameNumbers(num){

    let isSame = false
    let numSplit = num.toString().split('');
    let numShift = numSplit[0];
    for (let i of numSplit){
        if (i == numShift){
            isSame = true
        }
        else{
            isSame = false
            break
        }
    }
    console.log(isSame);
    console.log(numSplit.map(Number).reduce((a,b) => a+b,0))

}
sameNumbers(1234)