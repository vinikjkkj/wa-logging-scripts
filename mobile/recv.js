Java.perform(function() {
    var recvNode2 = Java.use('X.9TV')
    recvNode2.A06.implementation = function () {
        var result = this.A06()

        //result is a instance of TreeNode
        console.log('\u001B[31m[RECEIVED]\u001B[0m', result.toString())
        return result
    }
})
