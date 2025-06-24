import bookModel from "../models/bookModel.js";
import userModel from "../models/userModel.js";

// ====================== ADD BOOK TO CART  ======================
export const addBookToCart = async (req, res) => {
    try {
      const { id, bookid } = req.headers;
  
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }

      const book = await bookModel.findById(bookid);
      if (!book) {
        return res.status(404).json({
          success: false,
          message: 'Book not found',
        });
      }

      const isBookInCart = user.cart.includes(bookid);
      // const isBookInCart = user.cart.some(item => item.book.toString() === bookid);

      if (isBookInCart) {
        return res.status(409).json({
          success: false,
          message: "Book is already in Cart",
        });
      }
  
      await userModel.findByIdAndUpdate(id, { $push: { cart: bookid } });
      // await userModel.findByIdAndUpdate(id, {
      //   $push: { cart: { book: bookid, quantity: 1 } }
      // });
      
  
      return res.status(200).json({
        success: true,
        message: "Book added to Cart",
      });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
  };

  // ====================== REMOVE BOOK FROM CART  ======================

   export const removeBookFromCart = async (req, res) => {
      try {
        const { id, bookid } = req.headers;
  
    
        const user = await userModel.findById(id);
        if (!user) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
  
        const book = await bookModel.findById(bookid);
        if (!book) {
          return res.status(404).json({
            success: false,
            message: 'Book not found',
          });
        }
    
        const isBookExist = user.cart.includes(bookid);
        if (!isBookExist) {
          return res.status(409).json({
            success: false,
            message: "Book is not in cart",
          });
        }
    
        await userModel.findByIdAndUpdate(id, { $pull: { cart: bookid } });
    
        return res.status(200).json({
          success: true,
          message: "Book removed from Cart",
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
    };
  
  
    // ====================== GET BOOK ADDED TO THE CART BY PARTICULAR USER  ======================
    export const getCartBook = async(req, res)=>{
      try{
          const {id} = req.headers;
  
          const user = await userModel.findById(id).populate("cart")
          // const user = await userModel.findById(id).populate("cart.book");

          if(!user){
              return res.status(404).json({
                  success: false,
                  message: 'User not found',
                });
          }
  
          const cartBooks = user.cart;
          return res.status(200).json({
              success: true,
              data:cartBooks
            });
  
         
      }
      catch(error){
        return res.status(500).json({ success: false, message: error.message });
      }
  }
    


  export const updateCartQuantity = async (req, res) => {
    try {
      const { id, bookid } = req.headers;
      const { quantity } = req.body;
  
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
  
      // Validate quantity
      if (isNaN(quantity) || quantity < 1) {
        return res.status(400).json({
          success: false,
          message: "Quantity must be a number greater than 0"
        });
      }
  
      // Update quantity in cart
      const updatedUser = await userModel.findOneAndUpdate(
        { _id: id, "cart.book": bookid },
        { $set: { "cart.$.quantity": quantity } },
        { new: true }
      ).populate("cart.book");
  
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: "Book not found in cart"
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Cart quantity updated successfully",
        data: updatedUser.cart
      });
  
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  
 