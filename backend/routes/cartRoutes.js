import express from 'express'
import {addBookToCart, getCartBook, removeBookFromCart} from '../controller/cartController.js'
import  {authenticateToken} from '../middleware/userAuth.js'
const cartRoutes =express.Router();


cartRoutes.put('/add-book-to-cart',authenticateToken, addBookToCart)
cartRoutes.put('/remove-book-from-cart',authenticateToken, removeBookFromCart)
cartRoutes.get('/get-cart-book',authenticateToken,  getCartBook)

export default cartRoutes;