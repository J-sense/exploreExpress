const express = require('express')
const app = express()
const port = 3000


app.get('/users', (req,res)=>{
 const users =[
      {
        name:"Najmul Hasan Jishan", age:"adult", id:1,
      },
      {
        name:"Najmul  Jishan", age:"adult", id:2,
      },
]
 res.status(200).json({
  message:"retrive successfully",
  success: true,
  data: users
 })
})
app.get("/users/:id", (req,res)=>{
  const users =[
    {
      name:"Najmul Hasan Jishan", age:"adult", id:1,
    },
    {
      name:"Najmul  Jishan", age:"adult", id:2,
    },
    
   ]
   const singelUsers = users.find(user => user.id === Number(req.params.id))
   res.status(200).json({
    message:"retrive  single user successfully",
    success: true,
    data: singelUsers
   })
})

app.post("/users", (req,res)=>{
  res.status(200).json({
    message:"retrive successfully",
    success: true,
    data: {name:"jishan",age:"adult", id:3}
  })
})
app.delete("/users/:id", (req,res)=>{
  const users =[
    {
      name:"Najmul Hasan Jishan", age:"adult", id:1,
    },
    {
      name:"Najmul  Jishan", age:"adult", id:2,
    },
    
   ]
   const userId = Number(req.params.id);
   const remainingUsers = users.filter(user => user.id !== userId);

  res.status(200).json({
    message:"delate successfully",
    success: true,
    data: false
  })
})
app.patch("/users/:id",(req,res)=>{
  const users =[
    {
      name:"Najmul Hasan Jishan", age:"adult", id:1,
    },
    {
      name:"Najmul  Jishan", age:"adult", id:2,
    },
    
   ]
  const id = req.params.id;
  const body = req.body;
  const updateUSer = users.find(user => user.id === id)
  if(!updateUSer){
    res.status(200).json({
      message:"updated successfully",
      success: true,
      data: updateUSer
    })
  }
  res.status(200).json({
    message:"delate successfully",
      success: true,
      data: remainingUsers
  })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })