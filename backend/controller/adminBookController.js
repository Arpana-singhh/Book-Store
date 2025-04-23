import bookModel from "../models/bookModel.js";
import userModel from "../models/userModel.js";



// ====================== ADD BOOK ======================
export const addBook =async(req, res)=>{
    const {url, title, author, price, desc, language}=req.body
try{
    const {id} = req.headers;
    const user = await userModel.findById(id);

    if(!user){
        return res.status(400).json({success:false, message:"User not found"})
    }
    if(user.role !== "admin"){
        return res.status(400).json({success:false, message:"You are not having access to perform admin"})
    }

    const book =  new bookModel({
        url,
        title,
        author,
        price,
        desc,
        language
    })
    await book.save()
    
    return res.status(201).json({
        success: true,
        message: "Book added successfully",
      });
}
catch(error)
{
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
}
}

// ======================  UPDATE BOOK ======================
export const updateBook = async (req, res) => {
    const { url, title, author, price, desc, language } = req.body;
  
    try {
      const { id, bookid } = req.headers;
  
      // 1. Check if user exists
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(400).json({ success: false, message: "User not found" });
      }
  
      // 2. Check if user is admin
      if (user.role !== "admin") {
        return res.status(403).json({ success: false, message: "Access denied. Admins only." });
      }
  
      // 3. Check if book exists
      const existingBook = await bookModel.findById(bookid);
      if (!existingBook) {
        return res.status(404).json({ success: false, message: "Book not found" });
      }
  
      // 4. Update book
      await bookModel.findByIdAndUpdate(bookid, {
        url,
        title,
        author,
        price,
        desc,
        language,
      });
  
      return res.status(200).json({ success: true, message: "Book updated successfully" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };
  