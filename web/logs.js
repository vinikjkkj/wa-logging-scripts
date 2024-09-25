if (!window.logBack) {
    window.logBack = require("WALogger").LOG
}
  
require("WALogger").LOG =(...args) => {
    const result = window.logBack(...args)
    console.log('\u001B[31m[LOG]\u001B[0m', ...args)
    return result
}