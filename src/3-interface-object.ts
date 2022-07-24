// 接口：用于约束[函数、对象、 类]的结构和类型
// 类型断言: 明确类型
// 接口索引：当不确定属性的个数时，有数字索引和字符串索引

interface List {
  // id: number
  readonly id: number // 只读属性
  name: string
  // [x: string]: any // 字符串索引签名,即 用另一个字符串索引 List
  age?: number // 可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log('age:', value.age)
    }
    // value.id++ // id设置为readonly后不允许修改
  })
}
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 },
  ],
}

render(result)

// 类型断言
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ],
} as Result)

interface StringArray {
  [index: number]: string // 数字索引。用另一个数字去索引StringArray都会得到string
}

// 字符串索引和数字索引签名可以混用。注意：数字类型索引的返回值必须是字符串索引返回值的子类型
// 这是因为javascript会将number->string，这样就能保证值的兼容性
interface Names {
  [x: string]: string
  // y: number // 这样不被允许
  [z: number]: string
}