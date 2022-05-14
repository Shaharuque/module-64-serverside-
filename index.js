const express = require('express');
var cors = require('cors')
const app=express()
const port=process.env.PORT || 5000;

app.use(cors())  //middleware to giv permission client side to access data from this server side code
app.use(express.json()) //express.json() middleware hisabey use korleo post method ar khetrey req.body ar undefined hobey na result dekhabey

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]

app.get('/',(req,res)=>{
    res.send('Hello smarty chagol gadhad dwad')
})
// '/users' api/route k hit korley ekta response send korbey
app.get('/users',(req,res)=>{
    //getting data based on query parameter
    //filter by search query parameter
    if(req.query.name){
        const searchKey=req.query.name.toLocaleLowerCase()
        const matchedUsers=users.filter(user=>user.name.toLowerCase().includes(searchKey))
        res.send(matchedUsers)
    }
    else{
      res.send(users)  //http://localhost:5000/users?name=shaik amn jodi na pay tahley all users show hobey
    }
    
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)      //jei api/route k hit korbey tar /:id(dynamic part tuku dey)[remember ai console log result terminal a dekhtey pabo]
    const id=parseInt(req.params.id)
    const user=users.find(user=>user.id === id)  //api url a dynamic id ar opot base korey users thekey data get kortesey
    res.send(user)  //res will be shown in browser
})
app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
});

//Here,post api/route:http://localhost:5000/user(client side ar fetch a ai adress boshanao lagbey)
app.post('/user',(req,res)=>{
    // console.log('request',req.body)
    const user=req.body
    user.id=users.length+1
    res.send(user)    //client side a res ta jabey
})



app.listen(port,()=>{
    console.log('Listening to port',port)   //console a dekhabaey
})