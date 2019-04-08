const express = require('express')
const database= require(__dirname+'/databaseConfig').database

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/',
  express.static(__dirname + '/public')
)

app.use('/api/vendors',require(__dirname+'/../Domains/Vendor/VendorAPI').route);
app.use('/api/products',require(__dirname+'/../Domains/Product/ProductAPI').route);
app.use('/api/users',require(__dirname+'/../Domains/User/UserAPI').route);



// app.get('/todos', async (req, res) => {

//   const todos = await Todos.findAll()
//   res.send(todos)
// })

// app.post('/todos', async (req, res) => {

//   try {
//     const result = await Todos.create({
//       name: req.body.name,
//       priority: parseInt(req.body.priority)
//     })
//     res.send({success: true})
//   } catch (e) {
//     res.send({success: false, err: e.message})
//   }


// })

database.sync()
  .then(() => {
    console.log('database synced successfully...');
    const PORT=1156;
    app.listen(PORT,()=>{
        console.log('server is running at '+'http://localhost:'+PORT);
    })
  })
