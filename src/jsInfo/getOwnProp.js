const animal = {
  eats: true,
}

const rabbit = {
  jumps: true,
  __proto__: animal,
}

for(let key in rabbit) {
  let ownProp = rabbit.hasOwnProperty(key)

  ownProp ? console.log(`Own prop:: ${key}`) : console.log(`Inherit prop:: ${key}`)
}