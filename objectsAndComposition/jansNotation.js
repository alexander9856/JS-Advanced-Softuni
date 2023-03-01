function jansNotation(arr) {
    let nums = [];
    for (let i of arr) {
        if (Number(i)) {
            nums.push(i)
        }
        else {
            doMath(nums, i)
        }
    }
    if (nums.length > 1) {
        console.log('Error: too many operands!')
    }
    else if (nums.length == 1) {
        console.log(nums.toString())
    }
    function doMath(nums, operator) {
        if (nums.length < 2) {
            console.log("Error: not enough operands!")
            nums.splice(0,1)
        }
        else {
            if (operator == '+') {
                nums.splice(nums.length - 2, 2, nums[nums.length - 2] + nums[nums.length - 1])
            }
            else if (operator == '-') {
                nums.splice(nums.length - 2, 2, nums[nums.length - 2] - nums[nums.length - 1])
            }
            else if (operator == '*') {
                nums.splice(nums.length - 2, 2, nums[nums.length - 2] * nums[nums.length - 1])
            }
            else if (operator == '/') {
                nums.splice(nums.length - 2, 2, nums[nums.length - 2] / nums[nums.length - 1])
            }
        }
    }
}

jansNotation([15,
    '/']



)