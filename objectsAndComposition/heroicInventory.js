function heroicInventory(arr) {
    let res = []
    arr.map((x) => {
        let [name, level, items] = x.split(' / ')
        res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
    })
    console.log(JSON.stringify(res))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
