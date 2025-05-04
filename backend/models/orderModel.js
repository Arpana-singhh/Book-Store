import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user'
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: 'book'
    },
    status: {
      type: String,
      default: 'Order Placed',
      enum: ['Order Placed', 'Out for Delivery', 'Delivered', 'Canceled'] 
    }
  },
  { timestamps: true }
)

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel

