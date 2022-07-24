// 定义一个函数

// 方法1
// let add: (x: number, y: number) => number
// 方法2
// 也可以用接口定义
// interface Add {
//   (x: number, y: number): number
// }

// 方法3
// 也可以用类型别名
type Add = (x: number, y: number) => number

const add: Add = (a, b) => a + b

// 定义混合类型的接口: 即一个接口既可以定义一个函数，也可像对象一样 拥有属性和方法
interface Lib {
  (): void // Lib是一个函数，没有返回值
  version: string // Lib的一个属性
  doSomething(): void // Lib的一个方法
}

// 实现 ----- 这是个单例
let lib: Lib = (() => {}) as Lib
lib.version = '1.0.0'
lib.doSomething = () => {}

// 用函数封装 这样可以创建多个lib
function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()

let lib2 = getLib()
lib2.doSomething()