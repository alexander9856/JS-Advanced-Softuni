function createAssemblyLine() {

    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++
                }
                else {
                    car.temp--

                }
            };

        },
        hasAudio(car) {
            car.currentTrack = {
                'name': '',
                'artist': ''
            };
            car.nowPlaying = () => {
                if (car.currentTrack != null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`)
                }
            }
        },
        hasParktronic(car) {
            car.checkDistance = (num) => {
                if (num < 0.1) {
                    console.log('"Beep! Beep! Beep!"')
                }
                else if (num >= 0.1 && num < 0.25) {
                    console.log("Beep! Beep!")
                }
                else if (num >= 0.25 && num < 0.5) {
                    console.log("Beep!")
                }
                else {
                    console.log('')
                }
            }
        }

    }

}
let assemblyLine = createAssemblyLine();
let car = {
    make: 'Toyota',
    model: 'Avensis',

};



console.log(car);

