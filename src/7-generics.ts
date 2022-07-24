// 泛型
// 好处:
// 1. 函数和类可以轻松的支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
// 3. 灵活控制类型之间的约束

// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }

// log<string[]>(['1'])
// log(['a'])

// 泛型约束函数
// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log {
//   <T>(value: T): T
// }
// let myLog: Log = log

// 泛型约束接口其他成员
// interface Log<T> {
//   (value: T): T
// }

// let log1: Log<string> = log
// log1('hello')

// 设置默认类型
// interface Log<T = string> {
//   (value: T): T
// }

// let log2: Log = log
// log2('[1]')

// 泛型类

// 泛型可以约束类的成员
// 泛型不能用于类的静态成员. [静态成员不能引用类类型参数]
class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

// 泛型约束
interface Length {
  length: number
}

function log<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
