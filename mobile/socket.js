Java.perform(function () {
    var Log = Java.use("android.util.Log")
    var Exception = Java.use("java.lang.Exception")
    var SocketOutputStream = Java.use("java.net.SocketOutputStream")

    SocketOutputStream.write.overload('[B', 'int', 'int').implementation = function (b, off, len) {
        console.log("Sending: " + b)

        var stackTrace = Log.getStackTraceString(Exception.$new())
        console.log("Call stack: \n" + stackTrace)

        this.write(b, off, len)
    }

    SocketOutputStream.write.overload('[B').implementation = function (b) {
        console.log("Sending: " + b)

        var stackTrace = Log.getStackTraceString(Exception.$new())
        console.log("Call stack: \n" + stackTrace)

        this.write(b)
    }

    var SocketInputStream = Java.use("java.net.SocketInputStream")

    SocketInputStream.read.overload('[B', 'int', 'int').implementation = function (b, off, len) {
        var bytesRead = this.read(b, off, len)
        console.log("Receiving: " + b)

        var stackTrace = Log.getStackTraceString(Exception.$new())
        console.log("Call stack: \n" + stackTrace)

        return bytesRead
    }

    SocketInputStream.read.overload('[B').implementation = function (b) {
        var bytesRead = this.read(b)
        console.log("Receiving: " + b)

        var stackTrace = Log.getStackTraceString(Exception.$new())
        console.log("Call stack: \n" + stackTrace)

        return bytesRead
    }
})