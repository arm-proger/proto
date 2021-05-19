const Airplane = {
  // Take Off
  // isFlying: false,
  takeOff() {
    this.isFlying = true
  },
  // Land
  land() {
    this.isFlying = false
  },
}

// Ural Airline
const UralAir = Object.create(Airplane) 
UralAir.isFlying = false

// Armavia
const Armavia = Object.create(Airplane) 
Armavia.isFlying = false

UralAir.takeOff()
console.log(UralAir.isFlying)
console.log(Armavia.isFlying)
