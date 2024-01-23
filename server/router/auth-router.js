import express from 'express';
import {home,register} from '../controllers/auth-controllers.js';



const router = express.Router();



router.route('/').post(home)

router.route('/register').post(register);


// router.get('/',(req,res)=>{
//     res.status(200).send("hello This Is Mern Auth Application ")
// })
// router.get('/register',(req,res)=>{
//     res.status(200).send("Welcome to the Registration auth Page ")
// })
export default router