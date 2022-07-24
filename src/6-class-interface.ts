// 类和接口的关系

// 1. 类必须实现接口中声明的所有成员
// 2. 接口只能约束类的公有成员
// 3. 接口不能约束类的构造函数

// 1. 接口之间可以相互继承
// 2. 类之间可以相互继承
// 3. 接口可以通过类实现，但接口只能约束类的公有成员
// 4. 接口可以抽离出类的成员，抽离的时候包括public,private,protected

interface Human {
  // new (name: string): void
  name: string
  eat(): void
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
}

// 接口的继承
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {},
}

// 接口继承类。接口把类的公有成员抽象出来

class Auto {
  state = 1
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {}
