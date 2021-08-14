const express = require('express');
const app = express();
var item

/**
 * Get Item method gets the item from the vending machine, if no search term is passed, all item details will ve displayed
 */
app.get('/getItem',(req,res)=>{

});

/**
 * updateItem method will update an existing item or add new item if it does not exist into the vending machine.
 */
app.post('/updateItem',(req,res)=>{

});

app.post('/addMoney',(req, res)=>{

});

app.post('/buyItem',(req,res)=>{

})

app.listen(5000, ()=>{
    
    console.log('Vending machine service started in 5000');
})