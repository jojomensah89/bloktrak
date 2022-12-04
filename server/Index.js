
const express = require("express")
const User = require("./Models/UserModel")
const Property = require("./Models/Property")
const app = express(); 
const jwt = require("jsonwebtoken")
const cors = require("cors")
const  mongoose = require("mongoose") 
const url = "mongodb+srv://ignatius:417659Surplus@cluster0.k0gc8cm.mongodb.net/?retryWrites=true&w=majority"

        mongoose.connect(url, {useNewUrlParser :true});  
        const con = mongoose.connection; 
        con.on('open',function(){
            console.log('connnected to DB')
        })


        app.use(cors()); 
        app.use(express.json()) 




        app.listen(2000,()=>{ 
            console.log("Server running on 2000")
        }) 


        app.post('/api/register',async (req,res)=>{ 
           
            try{   
                const user = await  User.create({ 
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password,

                })

                res.json({
                    status : "Ok"
                })

            }catch(err){ 

                res.json({
                    status : "error",
                    error : "Duplicate email"
                })
              
            }
        }) 
        //ADD PROPERTY  
        app.post('/api/addprop',async (req,res)=>{ 
           
            try{   
                const user = await  Property.create({ 
                    PID : 12,
                    Owner : req.body.email,

                })

                res.json({
                    status : "Ok"
                })

            }catch(err){ 

                res.json({
                    status : "error",
                    error : "Invalid entry"
                })
              
            }
        }) 
        //Get ALL PROPERTY 
        app.get('/api/dashboard',async (req,res)=>{ 
           
            const token = req.headers['x-access-token']

            try {
                // const decoded = jwt.verify(token, 'secret123')
                // const email = decoded.email
                const property = await Property.find({ email: token })
                if(property){

                    res.json({ status: 'ok', propdata : property })
                }else{
                    res.json({ status: 'error', error: "invalid request" })
                }
                
                
            } catch (error) {
                console.log(error)
                res.json({ status: 'error', error: 'invalid token' })
            }
           
        }) 




        app.get('/api/dashboard',async (req,res)=>{ 
           
            const token = req.headers['x-access-token']

            try {
                // const decoded = jwt.verify(token, 'secret123')
                // const email = decoded.email
                const user = await User.findOne({ email: token })
                if(user){

                    res.json({ status: 'ok', quote: user.quote ,just :"just"})
                }else{
                    res.json({ status: 'error', error: "invalid request" })
                }
                
                
            } catch (error) {
                console.log(error)
                res.json({ status: 'error', error: 'invalid token' })
            }
           
        }) 
        app.post('/api/dashboard',async (req,res)=>{ 
           
            // const token = req.headers['x-access-token']

            try {
                // const decoded = jwt.verify(token, 'secret123')
                // const email = decoded.email
                // console.log("Here",email);
                await User.updateOne(
                    { email: req.body?.email },
                    { $set: { quote: req.body?.quote } }
                )
        
                 res.json({ status: 'ok' }) 
                
                
            } catch (error) {
                console.log(error,"Here")
                res.json({ status: 'error', error: 'invalid token' })
            }
           
        }) 
        app.post('/api/login',async (req,res)=>{ 
           

                const user = await User.findOne({
                    email : req.body.email,
                    password : req.body.password,  
                }) 
                if(user){ 

                    // const roles = Object.values({user})
                    const token = jwt.sign(
                        {
                            name: user.name,
                            email: user.email,
                        },
                        'secret123'
                    )
            
                    res.json({ status: 'ok', user: token })

                }else{  

                    res.json({
                        status : "error",
                        user : false
                    })

                }
           
        }) 

        app.get('/Hello',(req,res)=>{ 
            
            res.send("Hello")

        })