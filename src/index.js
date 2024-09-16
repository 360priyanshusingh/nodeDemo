const express = require('express')

const app = express();

const PORT = 4000;

app.get('/',(req ,res )=>{
 
    res.send("Hey this is the second demo express project");

})

app.listen(PORT,(req,res)=>{
    console.log(`Hey second server started at PORT ${PORT}`);
})