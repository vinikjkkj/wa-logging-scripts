if(!window.syncIqBack){
    window.syncIqBack = require("WASyncdRequestBuilderBuild").buildSyncIqNode
}
  
require("WASyncdRequestBuilderBuild").buildSyncIqNode = (a) => {
    const result = window.syncIqBack(a)
    console.log(a)
    return result
}
  