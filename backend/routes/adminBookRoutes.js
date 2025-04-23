import express from 'express'
import {addBook, updateBook} from '../controller/adminBookController.js'
import  {authenticateToken} from '../middleware/userAuth.js'
const adminBookRoutes =express.Router();


adminBookRoutes.post('/add-book',authenticateToken, addBook)
adminBookRoutes.put('/update-book',authenticateToken, updateBook)
 


export default adminBookRoutes
