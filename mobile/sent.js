Java.perform(function() {
    var sendNode = Java.use('X.7OT')
    sendNode.handleMessage.implementation = function (p1) {
        console.log('\u001B[32m[SENT]\u001B[0m', p1)

        var result = this.handleMessage(p1)
        return result
    }
})
