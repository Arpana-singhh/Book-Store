import bookModel from "../models/bookModel.js";
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

//  ====================== PLACE ORDER  ======================
export const placeOrder = async(req, res)=>{
   try{
    const {id} = req.headers;
    const {order} = req.body;

    for (const orderData of order){
        const newOrder = new orderModel({user: id, book: orderData._id})
        const orderDataFromDb = await newOrder.save();
        await userModel.findByIdAndUpdate(id, {$push:{order: orderDataFromDb._id}})
   
        await userModel.findByIdAndUpdate(id, {$pull:{cart : orderData._id}})
   
    }

    return res.json({
        success:true,
        messsage:"Message Placed Successfully"
    })

   }
   catch(error){
    return res.status(500).json({ success: false, message: error.message });
   }
}


//  ====================== GET ORDER HISTORY OF PARTICULAR USER ======================

export const getOrderHistory = async(req, res)=>{
try{
    const {id} = req.headers;
    const user = await userModel.findById(id).populate({
     path:"order",
     populate:{
        path:"book"
     }
    })

    const orderData = user.order.reverse();
    return res.json({
        success:true,
        data:orderData
    })
}
catch(error) {
    return res.status(500).json({ success: false, message: error.message });
 }
}
//  ====================== GET ALL ORDERS ======================

export const getAllOrders = async(req, res)=>{
    try{
        const userData = await orderModel.find()
        .populate({
            path:"book"
        })
        .populate({
            path:"user"
        })
        .sort({createdAt:-1});
        return res.json({
            success:true,
            data:userData,
        })
    } 
    catch(error){
        return res.status(500).json({ success: false, message: error.message });
    }

}


//  ====================== UPDATE ORDER STATUS ======================
export const updateOrderStatus = async(req, res)=>{
    const {status} = req.body;
    try{
       const {id} = req.params;
       const user = await userModel.findById(id)
       if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found"
        })
       }

       if(user !== "admin"){
        return res.status(404).json({
            success:false,
            message:"Admin Access Only. Access Denied"
        })
       }

        await orderModel.findByIdAndUpdate(id, {status:status})
        return res.json({
            success:true,
            message:'Status updated successfully'

        })
    } 
    catch(error){
        return res.status(500).json({ success: false, message: error.message });
    }
}