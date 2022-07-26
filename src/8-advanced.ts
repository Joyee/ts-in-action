// 类型兼容
// 类型保护

// Typescript能够在特定的区块中保证变量属于某种确定的类型

enum Type {
  Strong,
  Week,
}
class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello Javascript')
  }
  javascript: any
}

function isJava(lang: Java|JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // if (lang.helloJava) {

  // }

  // 方法一: instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法二：in 判断某个属性是否属于某个对象
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法三: typeof
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  // 方法四：创建类型保护函数来判断对象类型 如 isJava
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  return lang
}
