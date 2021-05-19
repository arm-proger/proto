const Airplane = {
  // Take Off
  // isFlying: false,
  takeOff: function () {
    this.isFlying = true
  },
  // Land
  land: function () {
    this.isFlying = false
  }
}

const UralAir = {
  __proto__: Airplane,
  flyCode: 'US-0825',
  isFlying: false,
}
const Airbus = {
  __proto__: Airplane,
  flyCode: 'US-0825',
  isFlying: false,
}

UralAir.takeOff()
console.log(UralAir)
console.log(UralAir.isFlying)
console.log(Airbus.isFlying)

