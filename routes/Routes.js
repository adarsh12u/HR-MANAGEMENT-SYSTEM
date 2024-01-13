const express = require("express");
const Route = express.Router();
const register_Hr = require("../controllers/HR/HR_register")
const HR = require('../controllers/HR/HR_login') 
const Forget_password_HR = require('../controllers/HR/HR_Forget-password')
const valid_hr = require('../controllers/HR/HR_valid')
const auth = require('../middleware/auth')
const Reset_password_HR = require('../controllers/HR/HR_Reset-password')
const create_CLient    = require('../controllers/Client/create_client')
const update_client   = require('../controllers/Client/update_Client')
const list_client    = require('../controllers/Client/List_CLient')
const delete_Client = require('../controllers/Client/delete_client');
const Show_client = require("../controllers/Client/Show_Client");
const create_award = require("../controllers/Award/create_award");
const list_award = require("../controllers/Award/list_award");
const Show_awards = require("../controllers/Award/show_awards");
const create_project = require("../controllers/Project/create_project");
const list_project = require("../controllers/Project/list_project");
const show_project = require("../controllers/Project/show_project");
const delete_project = require("../controllers/Project/delete_project");
const HR_Profile = require("../controllers/HR/HR_Profile");


// HR Routes
Route.post('/register',register_Hr);
Route.post('/login',HR.login_Hr) 
Route.post('/logout',HR.logout_Hr) 
Route.get('/valid',auth,valid_hr)
Route.get('/profile',auth,HR_Profile)
Route.post('/forget-password',Forget_password_HR)
Route.post('/reset-password/:id/:token' , Reset_password_HR)



// Client Routes
Route.post("/client/create",auth,create_CLient)
Route.patch("/client/edit/:id",auth,update_client)
Route.get("/client/list",auth,list_client);
Route.delete("/client/delete/:id",auth,delete_Client)
Route.get("/client/datail/:id",auth,Show_client)



// Award Route
Route.post("/award/create",auth,create_award)
Route.get("/award/list",auth,list_award);
Route.get("/award/datails/:id",auth,Show_awards);



// Project Route
Route.post("/project/create",auth,create_project)
Route.get("/project/list",auth,list_project);
Route.delete("/project/delete/:id",auth,delete_project)
Route.get("/project/datails/:id",auth,show_project);






module.exports = Route