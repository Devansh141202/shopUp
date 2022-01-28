const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.pneai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=> {
    console.log(`connection successful`);
 }).catch((e) => {
console.log(`no connection`);
})