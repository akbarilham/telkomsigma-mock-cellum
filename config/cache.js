const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

module.exports.NodeCache = NodeCache;
module.exports.myCache = myCache;