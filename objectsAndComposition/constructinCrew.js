function consCrew(obj) {

    if (obj.dizziness == true){
        obj.levelOfHydrated += (obj.weight / 10) * obj.experience;
        obj.dizziness = false
    }
    return obj

}

consCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
)