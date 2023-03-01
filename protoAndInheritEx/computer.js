function createComputerHierarchy() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer
            this.responseTime = responseTime
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer
            this.width = width;
            this.height = height
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer
            this.expectedLife = expectedLife
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            this.manufacturer = manufacturer
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace
            if (this.constructor === Computer) {
                throw new Error('Cant instantiate abstract class')
            }
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (battery instanceof Battery) {
                this._battery = battery
            }
            else {
                throw new TypeError()
            }
        }
        get battery() {
            return this._battery

        }
        set battery(val) {
            if (val instanceof Battery) {
                this._battery = val
            }
            else {
                throw new TypeError()
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if (keyboard instanceof Keyboard) {
                this._keyboard = keyboard
            }
            else {
                throw new TypeError()
            }
            if (monitor instanceof Monitor) {
                this._monitor = monitor
            }
            else {
                throw new TypeError()
            }
        }
        get keyboard() {
            if (this._keyboard) {
                return this._keyboard
            }
        }
        set keyboard(val) {
            if (val instanceof Keyboard) {
                this._keyboard = val
            }
            else {
                throw new TypeError()
            }
        }
        get monitor() {
            if (this._monitor) {
                return this._monitor
            }
        }
        set monitor(val) {
            if (val instanceof Monitor) {
                this._monitor = val
            }
            else {
                throw new TypeError()
            }
        }
    }

    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

// let battery = new Battery('Energy', 3);
// console.log(battery);
// let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery)
// console.log(laptop)
// // let bat = new Battery(''MUSISISIIS', 3');
// laptop.battery = 'haha'
// console.log(laptop.battery);

new Computer()