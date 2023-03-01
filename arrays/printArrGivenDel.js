function arrGivenDel(arr, del) {

    let res =''
    for (let i of arr){
        res += `${i}${del}`
    }
    console.log(res.slice(0,res.length-1))

}

arrGivenDel(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)