const crypto = require('crypto')
function hash(pass){
  return  crypto.createHash('sha256').update(pass).digest('hex');
}
module.exports = {hash}