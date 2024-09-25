if (!window.decodeBackStanza) {
    window.decodeBackStanza = require("WAWap").decodeStanza
    window.encodeBackStanza = require("WAWap").encodeStanza
}
  
  
require("WAWap").decodeStanza = async (e, t) => {
    const result = await window.decodeBackStanza(e, t)
    console.log('\u001B[31m[RECEIVED]\u001B[0m', result)
    return result
}