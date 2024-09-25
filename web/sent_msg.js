if(!window.encodeBack){
    window.encodeBack = require("WAWebSendMsgCommonApi").encodeAndPad
}
  
require("WAWebSendMsgCommonApi").encodeAndPad = (a) => {
    const result = window.encodeBack(a)
    console.log('\u001B[33m[ENCODE]\u001B[0m', a)
    return result
}
  