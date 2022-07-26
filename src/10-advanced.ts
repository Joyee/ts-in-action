// 高级类型： 映射类型
interface Obj {
  a: string
  b: number
  c: boolean
}

// 将Obj中的属性设置为只读
type ReadonlyObj = Readonly<Obj>

// 所有类型变成可选
type PartialObj = Partial<Obj>

// 抽取
type PickObj = Pick<Obj, 'a' | 'b'>

// 创建新属性
type RecordObj = Record<'x' | 'y', Obj>
