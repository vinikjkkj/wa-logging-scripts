if(!window.buildBack){
    window.buildBack = require("WABinary").Binary.build
}
  
require("WABinary").Binary.build = (a) => {
    const result = window.buildBack(a)
    console.log(a)
    return result
}