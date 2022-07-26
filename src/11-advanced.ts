// 高级类型：条件类型  T extends U ? X : Y

type TypeName<T> = 
    T extends string ? 'string' : 
    T extends number ? 'number' : 
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' : 
    T extends Function ? 'function' : 
    'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff拆解为多个条件类型的联合类型
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T1, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// 内置类型是 Exclude<T, U> 和Diff一样
// NotNullable<T>
// Extract<T, U>
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T> 获取函数返回值的类型
type T7 = ReturnType<() => string>
