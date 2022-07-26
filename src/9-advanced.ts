// 高级类型：

// 交叉类型和联合类型-----------------------------------------------
interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 交叉类型：取所有类型的并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
}

// 联合类型：取所有类型中的一个
let a: number | string = 'a'
let b: 'a' | 'b' | 'c' = 'a'
let c: 1 | 2 | 3

interface Rectangle {
  kind: 'rectangle'
  w: number
  h: number
}

interface Square {
  kind: 'square'
  size: number
}

interface Circle {
  kind: 'circle'
  r: number
}

type Shape= Square | Rectangle | Circle

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.w * s.h
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => { throw new Error(e)})(s)
  }
}

// 索引类型-----------------------------------------------
let obj = {
  a: 1,
  b: 2,
  c: 3
}

// function getValues(obj: any, keys: string[]) {
//   return keys.map((key) => obj[key])
// }

// console.log(getValues(obj, ['a', 'b', 'c']))
// console.log(getValues(obj, ['e', 'f'])) // 控制台 [undefined, undefined] 但ts没报错，如何解决？ keyof T

// keyof T
// interface Obj {
//   a: number
//   b: string
// }

// let key: keyof Obj

// // T[key]
// let value: Obj['a']

// // T extends U 泛型类型
// function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map((key) => obj[key])
// }
// console.log(getValues(obj, ['a', 'b', 'c']))
// console.log(getValues(obj, ['e', 'f'])) // 控制台 [undefined, undefined] 但ts没报错，如何解决？ keyof T
