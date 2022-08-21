/// <reference path="./a.ts" />

namespace Shape {
  export function square(x: number) {
    return x * x
  }
}

console.log(Shape.circle(2))
console.log(Shape.square(2))

import circle = Shape.circle
console.log(circle(2))

