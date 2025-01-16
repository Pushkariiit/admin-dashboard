import mongoose from 'mongoose';

const shopifyDetailsSchema = new mongoose.Schema(
  {
    accessToken: { 
        type: String, 
        required: true, 
        trim: true 
    },
    shopifyShopName: {
        type: String,
        required: true,
        trim: true
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
  }
);

module.exports = mongoose.model('shipifyDetails', shopifyDetailsSchema);
