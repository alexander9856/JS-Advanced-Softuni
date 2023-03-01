function negativePositiveNums(arr){
    let res = []
  for (let i in arr){
    if (arr[i] < 0){
        res.unshift(arr[i])
    }
    else{
        res.push(arr[i])
    }
  }
  console.log(res)

}
negativePositiveNums([7, -2, 8, 9])