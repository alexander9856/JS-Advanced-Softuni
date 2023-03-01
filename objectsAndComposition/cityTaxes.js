function cityRecord(name, population, treasury) {

    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += population * this.taxRate
        }
    }
    return obj

}
