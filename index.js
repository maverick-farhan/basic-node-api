//PostAPI in mongoose with expressjs
const express = require('express');
const app = express();
const connectDB = require('./config');
const Products = require('./products');

app.use(express.json()); //Body Parser for JSON

connectDB() //Calling Db Config code 

app.post('/create',async (req,res)=>{
    let data = new Products(req.body);
    let result = await data.save()
    res.send(result)
})
app.get('/list',async (req,res)=>{
let data = await Products.find();
  res.send(data);
})  
app.delete('/delete/:_id',async(req,res)=>{
  let deleteData = await Products.deleteOne(req.params)
  let data =await Products.find() 
  res.send(data)
})
app.put('/update/:_id',async(req,res)=>{
  let updateData = await Products.updateOne(req.params,{$set:{name:"BMW X1"}})
  let data =await Products.find()
  res.send(data)
})

app.listen(5000,()=>{
    console.log('Connected: Running at http://localhost:5000/')
})
