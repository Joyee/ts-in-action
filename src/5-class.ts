// 类
// 类的继承
// 类的成员修饰符 public private protected static readonly abstract

// !!! ts/js中："类成员的属性"都是实例属性，不是原型属性；"类成员的方法"都是原型方法
// !!! ts中实例的属性必须有初始值
class Dog {
  // 默认返回值是Dog，即类本身
  constructor(name: string) {
    this.name = name
  }

  // !!!构造函数私有化后，即这个类既不能被实例化 也不能被继承
  // private constructor(name: string) {
  //   this.name = name
  // }

  // !!! 构造函数受保护后 这个类只能被继承，不能被实例化，相当于声明了一个“基类”
  // 类“Dog”的构造函数是受保护的，仅可在类声明中访问

  // name: string = 'dog' // ts中实例的属性必须有初始值
  public name: string
  run() {
    // 默认返回值是void
    this.pri()
  }
  // 属性“pri”为私有属性，只能在类“Dog”中访问
  private pri() {
    console.log('private')
  }
  // 受保护成员只能在类/子类中访问
  protected pro() {
    console.log('this is protected function')
  }
  readonly legs: number = 4
  static food: string = 'bones' // 静态成员属性存在于类本身上面而不是类的实例, 只能通过类名来访问,
}

console.log(Dog.prototype)
let dog = new Dog('husky')
console.log(dog)
dog.run()
// dog.pro() // 属性“pro”受保护，只能在类“Dog”及其子类中访问
// dog.pri() // 属性“pri”为私有属性，只能在类“Dog”中访问
// 类的继承
// !!! ts中派生类的构造函数必须包含 "super" 调用。
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
  run() {
    this.pro()
  }
}

// 抽象类: 只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 在抽象类中不指定方法具体的实现
  // 抽象方法只能在抽象类中
  abstract sleep(): void
}

class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog1 = new Dog1('wangwang')
dog1.eat()

// 多态
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}

let cat = new Cat()

let animals: Animal[] = [dog1, cat]
animals.forEach((element) => {
  element.sleep()
})

// !!!特殊的ts类型，即 this
// 类的成员方法可以直接返回this，这样可以很方便的实现链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().next().step1().next().step2()