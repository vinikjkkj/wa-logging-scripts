if (!window.encodeBackStanza) {
    window.encodeBackStanza = require("WAWap").encodeStanza
}

require("WAWap").encodeStanza = (...args) => {
    const result = window.encodeBackStanza(...args)
    console.log('\u001B[32m[SENT]\u001B[0m', args[0])
    return result
}