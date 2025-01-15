import mongoose from 'mongoose'
import { BARGAIN_BEHAVIOUR } from '../constants';

const bargainingDetailsSchema = new mongoose.Schema(
  {
    productId: { 
        type: String,
        required: true 
    }, 
    behavior: { 
        type: String, 
        enum: BARGAIN_BEHAVIOUR, 
        required: true 
    },
    minPrice: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BargainingDetails', bargainingDetailsSchema);
