# __PROTO__

## Source map

* Source
  * jsInfo
    * 1.withPrototype.js
    * 2.searchingAlgs.js
    * 3.whatDoesItWrite.js
    * getOwnProp.js
  * 1.pagination.js
  * 2.airplane.js
* README.md

---

1. Write Pagination object that will get an array and pageSize, then will return the following.
  * prevPage
  * nextPage
  * firstPage
  * lastPage
  * goToPage
  * getPageItems

```js
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  Pagination.init(alphabetArray, 4);
  Pagination.getPageItems(); // ["a", "b", "c", "d"]
  Pagination.nextPage(); // add the current page by one
  Pagination.getPageItems(); // ["e", "f", "g", "h"]
  Pagination.nextPage().nextPage(); // the ability to call chainable
  Pagination.goToPage(3); // current page must be set to 3
```

[Decision](./src/1.pagination.js)

---

2. Write an Airplane object that initializes `name`.
  * Give airplanes the ability to `.takeOff()` and `.land()`:
      * If a plane takes off, its isFlying property is set to `true`.
      * If a plane lands, its isFlying property is set to `false`.

[Decision](./src/2.airplane.js)

---

### __JS INFO__

---

1. Here’s the code that creates a pair of objects, then modifies them.
Which values are shown in the process?

```js
  let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };

  console.log(rabbit.jumps) // ? (1)
  delete rabbit.jumps
  console.log(rabbit.jumps) // ? (2)
  delete animal.jumps
  console.log(rabbit.jumps) // ? (3)
```

[Decision](./src/jsInfo/1.withPrototype.js)

---

2. Given the following objects:

```js
  let head = {
    glasses: 1
  };

  let table = {
    pen: 3
  };

  let bed = {
    sheet: 1,
    pillow: 2
  };

  let pockets = {
    money: 2000
  };
```

* Use `__proto__` to assign prototypes in a way that any property lookup will follow the path: `pockets` → `bed` → `table` → `head`. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).

[Decision](./src/jsInfo/2.searchingAlgs.js)

---

3. We have `rabbit` inheriting from `animal`.
If we call `rabbit.eat()`, which object receives the full property: `animal` or `rabbit`?

```js
  let animal = {
    eat() {
      this.full = true;
    }
  };

  let rabbit = {
    __proto__: animal
  };

  rabbit.eat();
```

[Decision](./src/jsInfo/3.whatDoesItWrite.js)