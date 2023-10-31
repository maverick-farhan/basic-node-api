const mongoose = require('mongoose');
const config = ()=>{
mongoose.connect(`mongodb://127.0.0.1:27017/node`)
.then(()=>{
    console.log('Connected!')
})
}
module.exports = config;