function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {
    let parsed = JSON.parse(input);
    let arr = []
    for (let i of parsed) {
        let cubeArea = area.apply(i)
        let cubeVolume = vol.apply(i)
        let obj = { area: cubeArea, volume: cubeVolume }
        arr.push(obj)
    }
    return arr
}




solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)