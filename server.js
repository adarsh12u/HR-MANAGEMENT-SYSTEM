require('dotenv').config();
const express = require("express")
const app = express();
const Routes  = require("./routes/Routes")
const cors = require('cors')
require("./config/connection")
const user = require("./models/HR")
 const cookieparser = require('cookie-parser')
// PORT
const PORT = process.env.PORT|| 4000;

const path = require('path')

// app.use(express.static(path.join(__dirname , './client/app/build')))

app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname , "frontend","build")))
     res.sendFile(path.resolve(__dirname , "frontend","build","index.html"))
})
// middlew
app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',Routes)




// create server




const start = async()=>{

    try {
          
        app.listen(PORT , ()=>{
 
             console.log(`Server Run Sucessfully at PORT: ${PORT}`);

        })

    } catch (error) {
        console.log(error.message)
    }

}
start();
  
       

