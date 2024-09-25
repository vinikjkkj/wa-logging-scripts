if(!window.decodeBack){
    window.decodeBack = require("decodeProtobuf").decodeProtobuf
  }
  
require("decodeProtobuf").decodeProtobuf = (a, b) => {
    const result = window.decodeBack(a, b)
    console.log('\u001B[33m[DECODE]\u001B[0m', result)
    return result
}