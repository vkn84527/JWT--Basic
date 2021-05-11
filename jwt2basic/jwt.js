const express=require("express");
const app =express();
const jwt=require('jsonwebtoken')
const port=4000
const createtoken= async() => {
    token= await jwt.sign({ _id : "6085386917608433b455d283"}, "iamvikaskumarfromnitmanipurbtechcse",{
        expiresIn: "2 second"
    });
    // id and secret key(min 32)
    console.log(token)
    
    // const userverify =await jwt.verify(token,"iamvikaskumarfromnitmanipurbtechcse")
    // console.log(userverify)
}

createtoken();

/* All token has three part 
1. header part
2. payload (body part)
3. Signature(secret key)

it also know as state less beacuse server has no idea
es sa phle use kya history tha 
*/
app.listen(port, () =>{
    console.log(`server listen on ${port}`)
})